class Api::ArtistsController < ApplicationController
  before_action :require_signed_in!

  def create
    @artist = Artist.find_by_name(artist_params[:name])
    @artist ||= Artist.new(artist_params)
    if @artist.save
      render :show
    else
      render(json: {base: ["Artist field can't be blank"] }, status: 401)
    end
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :description)
  end
end
