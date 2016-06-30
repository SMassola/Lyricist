class Song < ActiveRecord::Base
  validates :title, :lyrics, :year, :user_id, :album_id, presence: true

  belongs_to :album

  has_one :artist,
    through: :album,
    source: :artist
end
