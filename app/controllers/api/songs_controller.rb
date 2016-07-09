class Api::SongsController < ApplicationController
  before_action :require_signed_in!, only: [:create]

  def index
    @songs = Song.all
    render :index
  end

  def new
    @song = Song.new
    render :new
  end

  def create
    
    @song = Song.new(song_params)

    if @song.save
      render :show
    else
      @errors = @song.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    @song = Song.includes(:comments, comments: [:user]).find_by_id(params[:id])
    if @song
      render :show
    else
      render json: ['Song does not exist'], status: 404
    end
  end

  private

  def song_params
    # params.require(:song).permit(
    #   :title,
    #   :lyrics,
    #   :year,
    #   :user_id,
    #   :album_id,
    #   :image_url,
    #   album_attributes: [:name],
    #   artist_attributes: [:name]
    # )
    params.require(:song).permit(
      :title,
      :lyrics,
      :year,
      :user_id,
      :album_id,
      :image_url,
      album_attributes: [:name, artist_attributes: [:name]],
    )
  end

end
