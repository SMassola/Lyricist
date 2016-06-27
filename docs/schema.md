# Schema Information

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
lyrics      | text      | not null
album_id    | integer   | not null, foreign key (references albums), indexed
year        | integer   | not null
user_id     | integer   | not null, foreign key (references users), indexed

## artists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | text      | not null
description | string    |

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
artist_id   | integer   | not null, primary key (references artists), indexed
name        | text      | not null
description | string    |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null, foreign key (references songs), indexed
user_id     | integer   | not null, foreign key (references users), indexed
body        | string    |

## annotations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
start_line  | integer   | not null
end_line    | integer   | not null
user_id     | integer   | not null, foreign key (references users), indexed
song_id     | integer   | not null, foreign key (references songs), indexed
title       | string    | not null
body        | string    | not null

## upvotes
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users), indexed
annotation_id | integer   | not null, foreign key (references annotations), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
