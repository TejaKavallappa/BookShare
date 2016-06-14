class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  def show
    @user = current_user
    token = session[:session_token]
    if @user
      render :show
    else
      render json: {user: {logged_in: false, username: null}}
    end
  end

  def create
    if !params[:user]
      @errors = ["Input fields cannot be empty"]
      render "api/shared/error", status: 422
      return
    end
    @user = User.new(user_params)
      if @user.save
        login(@user)
        render "api/users/show"
      else
        @errors = @user.errors.full_messages
        render "api/shared/error", status: 422
      end

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
