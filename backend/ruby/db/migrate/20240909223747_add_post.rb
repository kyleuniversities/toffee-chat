class AddPost < ActiveRecord::Migration[7.2]
  def change
    add_column :posts, :type, :string
  end
end
