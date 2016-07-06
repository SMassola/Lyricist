class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
    render :index
  end

  def new
    @song = Song.new
    render :new
  end

  def show
    @song = Song.find_by_id(params[:id])
    if @song
      render :show
    else
      render json: ['Song does not exist'], status: 404
    end
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
