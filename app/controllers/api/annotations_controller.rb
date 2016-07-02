class Api::AnnotationsController < ApplicationController
  def index
    @annotations = Annotation.where("song_id = ?", "#{params[:song_id]}")

    render :index
  end

  def new
    @annotation = Annotation.new(annotation_params)
    render :new
  end

  def create
    @annotation = Annotation.new(annotation_params)
    render :create
  end

  def show
  end

  def update
  end

  def destroy
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
