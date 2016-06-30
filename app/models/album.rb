class Album < ActiveRecord::Base
  validates :artist_id, :name, presence: true

  belongs_to :artist
  has_many :songs
end
