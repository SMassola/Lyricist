class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|

      t.string :body, null: false
      t.string :commentable, null: false
      t.integer :user_id, null: false
      t.integer :commentable_id, null: false
      t.timestamps null: false
    end

    add_index :comments, :user_id
    add_index :comments, :commentable_id
  end
end
