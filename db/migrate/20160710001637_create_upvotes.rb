class CreateUpvotes < ActiveRecord::Migration
  def change
    create_table :upvotes do |t|

      t.integer :value, null: false, default: 0
      t.integer :annotation_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :upvotes, :annotation_id
    add_index :upvotes, :user_id
    add_index :upvotes, [:user_id, :annotation_id], unique: true
  end
end
