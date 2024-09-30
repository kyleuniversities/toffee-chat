# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
      # Creation Fields
      field :createUser, UserType, null: false do
        argument :name, String, required: true
        argument :username, String, required: true
        argument :email, String, required: true
        argument :password, String, required: true
      end
      def createUser(name:,email:,username:,password:)
        bio = "Hi everyone, my name is #{name}!  It's a pleasure to meet you!"
        User.create name: name, email: email, username: username, password: password, bio: bio
      end

      field :createPost, PostType, null: false do
        argument :body, String, required: true
      end
      def createPost(body:)
        userId = context[:current_user]['id']
        post = Post.create body: body
        user = User.where(id: userId).first
        userPosts = user.posts
        userPosts.append(post)
        user.update(posts: userPosts)
        post
      end

      field :createComment, CommentType, null: false do
        argument :postId, String, required: true
        argument :body, String, required: true
      end
      def createComment(postId:,body:)
        userId = context[:current_user]['id']
        comment = Comment.create body: body
        post = Post.where(id: postId).first
        user = User.where(id: userId).first
        postComments = post.comments
        userComments = user.comments
        postComments.append(comment)
        userComments.append(comment)
        post.update(comments: postComments)
        user.update(comments: userComments)
        comment
      end

      # Update Fields
      field :updateUser, UserType, null: false do
        argument :id, String, required: true
        argument :name, String, required: true
        argument :username, String, required: true
        argument :bio, String, required: true
      end
      def updateUser(id:,name:,username:,bio:)
        if context[:current_user]['id'].to_s != id.to_s
          raise "Request user does not match target user"
        end
        user = User.where(id: id).first
        user.update name: name, username: username, bio: bio
        user
      end

      field :updatePost, PostType, null: false do
        argument :id, String, required: true
        argument :body, String, required: true
      end
      def updatePost(id:,body:)
        post = Post.where(id: id).first
        if context[:current_user]['id'].to_s != post.user.id.to_s
          raise "Request user does not match target post author"
        end
        post.update body: body
        post
      end

      field :updateComment, CommentType, null: false do
        argument :id, String, required: true
        argument :body, String, required: true
      end
      def updateComment(id:,body:)
        comment = Comment.where(id: id).first
        if context[:current_user]['id'].to_s != comment.user.id.to_s
          raise "Request user does not match target comment author"
        end
        comment.update body: body
        comment
      end

      # Delete Fields
      field :deleteUser, UserType, null: false do
        argument :id, String, required: true
      end
      def deleteUser(id:)
        if context[:current_user]['id'].to_s != id.to_s
          raise "Request user does not match target user"
        end
        user = User.where(id: id).first
        user.likes.destroy_all
        user.comments.destroy_all
        user.posts.destroy_all
        User.where(id: id).destroy_all
        user
      end

      field :deletePost, PostType, null: false do
        argument :id, String, required: true
      end
      def deletePost(id:)
        post = Post.where(id: id).first
        if context[:current_user]['id'].to_s != post.user.id.to_s
          raise "Request user does not match target post author"
        end
        post.comments.destroy_all
        post.likes.destroy_all
        Post.where(id: id).destroy_all
        post
      end

      field :deleteComment, CommentType, null: false do
        argument :id, String, required: true
      end
      def deleteComment(id:)
        comment = Comment.where(id: id).first
        if context[:current_user]['id'].to_s != comment.user.id.to_s
          raise "Request user does not match target comment author"
        end
        Comment.where(id: id).destroy_all
        comment
      end

      # Toggle Fields
      field :likeUnlikePost, LikeType, null: false do
        argument :postId, String, required: true
      end
      def likeUnlikePost(postId:)
        userId = context[:current_user]['id']
        puts "USER_ID_15: #{userId}"
        post = Post.where(id: postId).first
        user = User.where(id: userId).first
        postLikes = post.likes
        userLikes = user.likes
        puts "OLD_POST_LIKES_15: #{postLikes.as_json}"
        matchingLikes = []
        for postLike in postLikes do 
          if postLike.post.id.to_s == postId && postLike.user.id.to_s == userId
            matchingLikes.append(postLike)
          end
        end
        like = Like.create
        puts "MATCHING_LIKES_15: #{matchingLikes.as_json}"
        if matchingLikes.length() == 0
          puts "Add Like"
          postLikes.append(like)
          userLikes.append(like)
        else
          puts "Remove Like"
          like = matchingLikes[0]
          for matchingLike in matchingLikes do
            matchingLike.destroy
          end
        end
        puts "USER__15: #{user.as_json}"
        puts "USER_LIKES_15: #{userLikes.as_json}"
        puts "NEW_POST_LIKES_15: #{postLikes.as_json}"
        post.update(likes: postLikes)
        user.update(likes: userLikes)
        like
      end
  end
end
