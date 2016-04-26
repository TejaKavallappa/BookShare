class SessionsController < ApplicationController
  def new
    if signed_in?
      redirect_to root_url
    else
      render :new
    end
  end

  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )

    if @user
      login(@user)
      redirect_to root_url
    else
      flash[:errors] = ["Unable to login"]
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end
end
