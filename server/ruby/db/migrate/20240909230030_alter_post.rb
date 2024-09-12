class AlterPost < ActiveRecord::Migration[7.2]
  def change
    rename_column :posts, :type, :kind
  end
end
