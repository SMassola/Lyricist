class Api::AlbumsController < ApplicationController
  def new
    @album = Album.new
    render :new
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      render :create
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = Album.find_by_id(params[:id])
    if @album
      render :show
    else
      render json: ['Album does not exist'], status: 404
    end
  end

  def index
    @albums = Album.where("title LIKE ? AND artist_id IN (?)", "%#{params[:title]}%", "#{params[:artist_id]}").limit(10)
    if @albums.length > 0
      render :index
    else
      render json: ['NO ALBUMS FOUND']
    end
  end

  def update
    @album = Album.find_by_id(params[:id])
    if @album.update(album_params)
      render :update
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find_by_id(params[:id])
    if @album.delete
      render :destroy
    else
      render json: @album.errors.full_messages, status: 404
    end
  end

  private

  def album_params
    params.require(:album).permit(:artist_id, :name, :description)
  end
end
