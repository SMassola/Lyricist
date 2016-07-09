class Album < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :artist, inverse_of: :albums
  has_many :songs, inverse_of: :album

  validates_presence_of :artist
  accepts_nested_attributes_for :artist
end
