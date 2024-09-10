# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID." do
      argument :id, ID, required: true, description: "ID of the object."
    end

    def node(id:)
      context.schema.object_from_id(id, context)
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs." do
      argument :ids, [ID], required: true, description: "IDs of the objects."
    end

    def nodes(ids:)
      ids.map { |id| context.schema.object_from_id(id, context) }
    end

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # Test Fields
    field :test, [PostType], null: false, description: 'Test'
    def test
      items = Post.all
      xxx = items.sort {|a,b| b.created_at <=> a.created_at }
      xxx
    end

    # User Fields
    field :users, [UserType], null: false, description: 'List all users'
    def users
      User.all
    end

    field :userById, [UserType], null: false do
      argument :id, String, required: true
    end
    def userById(id: )
      User.where(id: id)
    end

    # field :newsPosts, [PostType], null: false, description: 'List all news posts'
    # def newsPosts
    #   posts = Post.all
    #   posts.select{|item| item.kind == "news"}
    # end

    # Post Fields
    field :posts, [PostType], null: false, description: 'List all posts'
    def posts
      posts = Post.all
      reversedPosts = posts.sort {|a,b| b.created_at <=> a.created_at }
      reversedPosts
    end
    
    field :newsPosts, [PostType], null: false, description: 'List all news posts'
    def newsPosts
      posts = Post.all
      posts.select{|item| item.kind == "news"}
    end

    field :postById, [PostType], null: false do
      argument :id, String, required: true
    end
    def postById(id: )
      Post.where(id: id)
    end

    # Comment Fields
    field :comments, [CommentType], null: false, description: 'List all comments'
    def comments
      Comment.all
    end

    field :commentById, [CommentType], null: false do
      argument :id, String, required: true
    end
    def commentById(id: )
      Comment.where(id: id)
    end
  end
end
