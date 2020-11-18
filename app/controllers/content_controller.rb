class ContentController < ApplicationController
  def save_to_list
    @db_id = params[:id]
    @movie = Movie.create(db_id: @db_id)

    @list_id = params[:list]
    @content = Content.create(movie_id: @movie.id, list_id: @list_id)
    redirect_to list_path(@list_id)
  end

  def destroy
    @content = Content.find(params[:contentid])
    if @content.destroy
      flash[:success] = 'Object was successfully deleted.'
      redirect_to list_path(params[:id])
    else
      flash[:error] = 'Something went wrong'
      redirect_to list_path(params[:id])
    end
  end
  
end
