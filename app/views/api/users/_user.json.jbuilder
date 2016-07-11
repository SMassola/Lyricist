json.extract! user, :id, :username

json.upvoted_annotations user.upvoted_annotations.map { |annotation| annotation.id }
