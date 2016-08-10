class Api::AnnotationsController < ApplicationController
  before_action :require_signed_in!

  def index
    @annotations = Annotation.all
  end

  def create
    @annotation = Annotation.includes(:comments, comments: [:user]).new(annotation_params)
    @annotation.user = current_user
    if @annotation.save
      render :show
    else
      @errors = @annotation.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    @annotation.destroy!
    render :destroy
  end

  private

  def annotation_params
    params.require(:annotation).permit(
      :body,
      :start_idx,
      :end_idx,
      :user_id,
      :song_id)
  end
end
