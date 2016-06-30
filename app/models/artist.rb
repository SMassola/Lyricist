class Artist < ActiveRecord::Base
  validates :name, presence: true

  has_many :albums

  has_many :songs,
    through: :albums,
    source: :songs
end
