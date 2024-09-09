# frozen_string_literal: true

module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :user, String
    field :picture, String
    field :kind, String
    field :body, String
    field :like, [Types::LikeType]
    field :comments, [Types::CommentType]
    field :numberOfLikes, Integer
    field :numberOfComments, Integer
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def numberOfComments
      object.comments.length()
    end

    def numberOfLikes
      object.likes.length()
    end
  end
end
