class RenameCommentableColumn < ActiveRecord::Migration
  def change
    rename_column :comments, :commentable, :commentable_type
  end
end
