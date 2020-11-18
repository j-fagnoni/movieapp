class ListController < ApplicationController

  before_action :authenticate_user!

  def index
    @user = current_user.id
    @lists = List.where(user_id: @user)
  end

  def show
    @list = List.find(params[:id])
    @contents = Content.where(list_id: @list.id)
  end

  def new
    @list = List.new
  end
  
  def create
    @list = List.new(list_params)
    if @list.save
      flash[:success] = "Object successfully created"
      redirect_to lists_path
    else
      flash[:error] = "Something went wrong"
      render 'new'
    end
  end

  def destroy
    @list = List.find(params[:id])
    if @list.destroy
      flash[:success] = 'Object was successfully deleted.'
      redirect_to lists_path
    else
      flash[:error] = 'Something went wrong'
      redirect_to lists_path
    end
  end


  private

  def list_params
    params.require(:list).permit(:title).merge(user_id: current_user.id)
  end
end
