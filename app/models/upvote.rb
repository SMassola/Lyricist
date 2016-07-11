class Upvote < ActiveRecord::Base

  validates_inclusion_of :value, in: [1,0,-1]
  validates :user, :value, :annotation, presence: true
  validates :user_id, uniqueness: {scope: :annotation_id}
  
  belongs_to :annotation
  belongs_to :user
end
