class Api::CommentsController < ApplicationController
  before_action :require_signed_in!

  def index
    @comments = Comment.all
  end

  def create
    if params[:song_id]
      commentable = Song.find_by_id(params[:song_id])
    elsif params[:annotation_id]
      commentable = Annotation.find_by_id(params[:annotation_id])
    end
    @comment = commentable.comments.new(comment_params)
    @comment.user = current_user;
    if @comment.save
      render :show
    else
      @errors = @comment.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
