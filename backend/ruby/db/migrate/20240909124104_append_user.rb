class AppendUser < ActiveRecord::Migration[7.2]
  def change
    add_column :users, :bio, :string
  end
end
