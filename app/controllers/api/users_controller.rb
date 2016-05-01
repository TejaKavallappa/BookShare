class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = current_user;
    # render :show
    token = session[:session_token]
    # @user = User.find_by(session_token: token);
    if @user
      render :show
    else
      render json: {user: {logged_in: false, username: null}}
    end
  end

  def create
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
