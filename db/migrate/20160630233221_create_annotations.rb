class CreateAnnotations < ActiveRecord::Migration
  def change
    create_table :annotations do |t|

      t.text :body, null: false
      t.integer :start_idx, null: false
      t.integer :end_idx, null: false
      t.integer :user_id, null: false
      t.integer :song_id, null: false

      t.timestamps null: false
    end
    
    add_index :annotations, :user_id
    add_index :annotations, :song_id
  end
end
