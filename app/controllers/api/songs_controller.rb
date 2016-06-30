class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
    render :index
  end

  def new
    @song = Song.new
    render :new
  end

  def create
    @song = Song.create!(song_params)
    render :show
  end

  private

  def song_params
    params.require(:song).permit(
      :title,
      :lyrics,
      :year,
      :user_id,
      :album_id,
      :image_url
    )
  end

end
