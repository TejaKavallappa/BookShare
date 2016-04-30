class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user
  private
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.ensure_session_token
  end

  def logout
    current_user.try(:reset_token!)
    session[:session_token] = nil
  end

  def ensure_logged_in
    redirect_to new_session_url unless logged_in?
  end
end
