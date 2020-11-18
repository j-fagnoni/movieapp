class PagesController < ApplicationController
  def home
    redirect_to popular_path
  end

  def popular
    render 'pages/popular'
  end

  def upcoming
    render 'pages/upcoming'
  end

  def movies
    @id = params[:id]
    render 'pages/movie'
  end

  def search
    @query = params[:query]
    render 'pages/search'
  end

  def empty_search
    @query = "sharknado"
    render 'pages/search'
  end
end
