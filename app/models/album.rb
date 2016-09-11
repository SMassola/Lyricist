class Album < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :artist, inverse_of: :albums
  has_many :songs, inverse_of: :album

  validates_presence_of :artist
  accepts_nested_attributes_for :artist

  def autosave_associated_records_for_artist
    # Find or create the artist by name
    if new_artist = Artist.find_by_name(artist.name)
      self.artist = new_artist
    else
      self.artist.save!
    end
  end
end
