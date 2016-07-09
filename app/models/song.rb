class Song < ActiveRecord::Base
  validates :title, :lyrics, :year, :user_id, presence: true

  has_many :annotations

  belongs_to :album, inverse_of: :songs

  has_one :artist,
    through: :album,
    source: :artist

  validates_presence_of :album

  accepts_nested_attributes_for :album
  has_many :comments, as: :commentable
end
