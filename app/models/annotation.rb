class Annotation < ActiveRecord::Base

  validates :body,
            :start_idx,
            :end_idx,
            :user_id,
            :song_id,
            presence: true

  belongs_to :song

end
