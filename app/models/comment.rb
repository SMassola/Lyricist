class Comment < ActiveRecord::Base
  validates :commentable_id,
            :body,
            :user,
            :commentable_type,
            :user_id,
            presence: true

  belongs_to :commentable, polymorphic: true
  belongs_to :user
end
