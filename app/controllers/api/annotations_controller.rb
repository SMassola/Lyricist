class Api::AnnotationsController < ApplicationController

  def create
    @annotation = Annotation.new(annotation_params)
    if @annotation.save
      render :create
    else
      render(json: {base: @annotation.errors.full_messages}, status: 422)
    end
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
