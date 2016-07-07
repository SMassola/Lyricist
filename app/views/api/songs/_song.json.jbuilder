json.extract! song, :id, :title, :lyrics, :year, :user_id, :album_id,
:image_url, :artist, :album, :annotations

json.comments song.comments do |comment|
  json.partial! 'api/comments/comment', comment: comment
end
