# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
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
  end
end
