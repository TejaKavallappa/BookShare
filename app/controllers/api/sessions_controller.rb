class Api::SessionsController < ApplicationController

  def show
    render :show
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
    logout
    render :show
  end
end
