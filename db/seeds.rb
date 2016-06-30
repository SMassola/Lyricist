Song.delete_all

Artist.create!(
  name: "artist1"
)

Album.create!(
  name: "album1",
  artist_id: 1
)

Song.create!(
  title: "song1",
  lyrics: "la la la",
  year: 2016,
  user_id: 1,
  album_id: 1,
)

User.create!(
  username: "guest",
  password: "password",
  email: "guest"
)
