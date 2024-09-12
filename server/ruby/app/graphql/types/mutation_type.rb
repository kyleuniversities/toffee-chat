# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
      # Creation Fields
      field :createUser, UserType, null: false do
        argument :name, String, required: true
        argument :username, String, required: true
        argument :bio, String, required: true
      end
      def createUser(name:,username:,bio:)
        User.create name: name, username: username, bio: bio
      end

      field :createPost, PostType, null: false do
        argument :userId, String, required: true
        argument :body, String, required: true
      end
      def createPost(userId:,body:)
        post = Post.create body: body
        user = User.where(id: userId).first
        userPosts = user.posts
        userPosts.append(post)
        user.update(posts: userPosts)
        post
      end

      field :createComment, CommentType, null: false do
        argument :userId, String, required: true
        argument :postId, String, required: true
        argument :body, String, required: true
      end
      def createComment(userId:,postId:,body:)
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
        post.update body: body
        post
      end

      field :updateComment, CommentType, null: false do
        argument :id, String, required: true
        argument :body, String, required: true
      end
      def updateComment(id:,body:)
        comment = Comment.where(id: id).first
        comment.update body: body
        comment
      end

      # Delete Fields
      field :deleteUser, UserType, null: false do
        argument :id, String, required: true
      end
      def deleteUser(id:)
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
        Comment.where(id: id).destroy_all
        comment
      end

      # Toggle Fields
      field :likeUnlikePost, LikeType, null: false do
        argument :userId, String, required: true
        argument :postId, String, required: true
      end
      def likeUnlikePost(userId:,postId:)
        post = Post.where(id: postId).first
        user = User.where(id: userId).first
        postLikes = post.likes
        userLikes = user.likes
        matchingLikes = []
        for postLike in postLikes do 
          if postLike.post.id.to_s == postId && postLike.user.id.to_s == userId
            matchingLikes.append(postLike)
          end
        end
        like = Like.create
        if matchingLikes.length() == 0
          postLikes.append(like)
          userLikes.append(like)
        else
          like = matchingLikes[0]
          # Destroy all likes
          for matchingLike in matchingLikes do
            matchingLike.destroy
          end
          # # Delete post likes
          # newPostLikes = []
          # for postLike in postLikes do 
          #   if !postLike.post.id.to_s == postId || !postLike.user.id.to_s == userId
          #     newPostLikes.append(postLike)
          #   end
          # end
          # postLikes = newPostLikes
          # # Delete user likes
          # newUserLikes = []
          # for userLike in userLikes do 
          #   if !userLike.post.id == postId || !userLike.user.id == userId
          #     newUserLikes.append(userLike)
          #   end
          # end
          # userLikes = newUserLikes
        end
        post.update(likes: postLikes)
        user.update(likes: userLikes)
        like
      end
  end
end
