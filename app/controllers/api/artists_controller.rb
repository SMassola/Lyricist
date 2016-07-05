class Api::ArtistsController < ApplicationController

  def new
    @artist = Artist.new
    render :new
  end

  def create
    @artist = Artist.find_by(name: params[:artist][:name])
    @artist ||= Artist.new(artist_params)
    if @artist.save
      render :show
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def index
    @artists = Artist.where("name LIKE ?", "%#{params[:name]}%" ).limit(10)
    if @artists.length > 0
      render :index
    else
      render json: ['NO ARTISTS FOUND']
    end
  end

  def show
    @artist = Artist.find_by_id(params[:id])
    if @artist
      render :show
    else
      render json: ['Artist does not exist'], status: 404
    end
  end

  def update
    @artist = Artist.find_by_id(params[:id])
    if @artist.update(artist_params)
      render :update
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def destroy
    @artist = Artist.find_by_id(params[:id])
    if @artist.delete
      render :destroy
    else
      render json: @artist.errors.full_messages, status: 404
    end
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :description)
  end
end
