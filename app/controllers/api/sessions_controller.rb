class Api::SessionsController < ApplicationController

  def show
    token = session[:session_token]
    @user = User.find_by(session_token: token);
    if @user
      render :show
    else
      render json: {user: {logged_in: false, username: null}}
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)

      render "api/users/show"
    else
      @errors = ['Invalid Credentials']
      render "api/shared/error", status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render :delete
    else
      @errors = ["Cannot logout!"]
      render "api/shared/error", status: 401#lookup error status
    end
  end

end
