class Song < ActiveRecord::Base
  validates :title, :lyrics, :year, :user_id, presence: true

  before_save :set_image

  def set_image
    if self.image_url.blank?
      self.image_url = "http://res.cloudinary.com/deeucxgdi/image/upload/v1470423237/default_album_art_chgxpn.png"
    end
  end

  has_many :annotations

  belongs_to :album, inverse_of: :songs

  has_one :artist,
    through: :album,
    source: :artist

  validates_presence_of :album

  accepts_nested_attributes_for :album
  has_many :comments, as: :commentable
end
