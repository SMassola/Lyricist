json.id annotation.id
json.body annotation.body
json.start_idx annotation.start_idx
json.end_idx annotation.end_idx
json.user_id annotation.user_id
json.song_id annotation.song_id
json.song annotation.song
json.comments annotation.comments
json.username annotation.user.username

json.comments annotation.comments do |comment|
  json.partial! 'api/comments/comment', comment: comment
end
