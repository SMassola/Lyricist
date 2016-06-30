class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|

      t.string :name, null: false
      t.text :description
      t.integer :artist_id, null: false

      t.timestamps null: false
    end
    add_index :albums, :artist_id
  end
end
