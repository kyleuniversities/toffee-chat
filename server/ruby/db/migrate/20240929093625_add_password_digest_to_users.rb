class AddPasswordDigestToUsers < ActiveRecord::Migration[7.2]
  def change
    add_column :users, :password_digest, :string
    add_column :users, :string, :string
  end
end
