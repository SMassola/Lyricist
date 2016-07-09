class Api::AlbumsController < ApplicationController
  before_action :require_signed_in!

  def create
    @album = Album.find_by(name: params[:album][:name])
    @album ||= Album.new(album_params)

    if @album.save
      render :show
    else
      render(json: {base:["Album field can't be blank"] }, status: 401)
    end
  end

  private

  def album_params
    params.require(:album).permit(
      :artist_id,
      :name,
      :description,
      artist_attributes: [:name])
  end
end
