class Artist < ActiveRecord::Base
  validates :name, presence: true

  has_many :albums, inverse_of: :artist

  has_many :songs,
    through: :albums,
    source: :songs
end
