class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|

      t.string :title, null: false
      t.text :lyrics, null: false
      t.integer :year, null: false
      t.integer :user_id, null: false
      t.integer :album_id, null: false
      t.string :image_url

      t.timestamps null: false
    end
    add_index :songs, :album_id
    add_index :songs, :user_id
  end
end
