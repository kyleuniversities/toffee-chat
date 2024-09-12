# frozen_string_literal: true

module Types
  class LikeType < Types::BaseObject
    field :id, ID, null: false
    field :user, Types::UserType
    field :post, Types::PostType
    field :userId, String
    field :postId, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def userId
      object.user.id.to_s
    end

    def postId
      object.post.id.to_s
    end
  end
end
