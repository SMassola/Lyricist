json.array!(@albums) do |album|
  json.id album.id
  json.artist_id album.artist_id
  json.title album.title
  json.description album.description
  json.songs album.songs
  json.type "album"
end
