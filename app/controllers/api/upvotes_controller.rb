class Api::UpvotesController < ApplicationController

  def create
    @upvote = Upvote.new(
      user_id: current_user.id,
      annotation_id: upvote_params[:annotation_id],
      value: upvote_params[:value]
    )

    if(@upvote.save)
      render "api/upvotes/show", status: 200
    else
      @errors = @upvote.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @upvote = Upvote.find_by(
      user_id: current_user.id,
      annotation_id: upvote_params[:annotation_id]
    )

    if(@upvote.destroy)
      render json: {
        userId: current_user.id,
        annotationId: upvote_params[:annotation_id]
      }
    else
      @errors = upvote.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private

  def upvote_params
    params.require(:upvote).permit(:annotation_id, :value)
  end
end
