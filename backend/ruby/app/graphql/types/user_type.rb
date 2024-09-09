# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :username, String
    field :email, String
    field :password, String
    field :bio, String
    field :role, String
    field :numberOfAuthoredPosts, Integer
    field :numberOfAuthoredComments, Integer
    field :numberOfAuthoredLikes, Integer
    field :numberOfReceivedComments, Integer
    field :numberOfReceivedLikes, Integer
    field :posts, [Types::PostType]
    field :likes, [Types::LikeType]
    field :comments, [Types::CommentType]
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def numberOfAuthoredPosts
      object.posts.length()
    end

    def numberOfAuthoredComments
      object.comments.length()
    end

    def numberOfAuthoredLikes
      object.likes.length()
    end

    def numberOfReceivedComments
      amount = 0
      for post in object.posts do
        amount += post.comments.length()
      end
      amount
    end

    def numberOfReceivedLikes
      amount = 0
      for post in object.posts do
        amount += post.likes.length()
      end
      amount
    end
  end
end
