class AppendComments < ActiveRecord::Migration[7.2]
  def change
    add_column :comments, :body, :string
  end
end
