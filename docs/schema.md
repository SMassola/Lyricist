# Schema Information

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
album_id    | integer   | not null, foreign key (references albums), indexed
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
lyrics      | text      | not null
year        | integer   | not null
image_url   | string    |

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
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
commentable_id   | integer   | not null, foreign key (references songs), indexed
user_id          | integer   | not null, foreign key (references users), indexed
commentable_type | integer   | not null
body             | string    |

## annotations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
song_id     | integer   | not null, foreign key (references songs), indexed
body        | string    | not null
start_idx   | integer   | not null
end_idx     | integer   | not null

## upvotes
### (uniqueness constraints on user_id, votable_id, votable_type combinations)
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users), indexed
votable_id    | integer   | not null, foreign key (references annotations), indexed
votable_type  | string    | not null
vote          | value     | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    |
