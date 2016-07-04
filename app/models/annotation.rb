class Annotation < ActiveRecord::Base
  validate :non_overlapping
  validates :body,
            :start_idx,
            :end_idx,
            :user_id,
            :song_id,
            presence: true


  belongs_to :song
  def non_overlapping
    song.annotations.each do |annotation|
      range = (annotation.start_idx..annotation.end_idx)
      if (range.include?(start_idx) || range.include?(end_idx))
        errors.add(:body, "Annotations cannot overlap")
        return
      elsif (annotation.start_idx > start_idx) && (annotation.end_idx < end_idx)
        errors.add(:body, "Annotations cannot overlap")
        return
      end
    end
  end
end
