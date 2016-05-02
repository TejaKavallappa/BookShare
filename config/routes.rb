Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :books, only: [:create, :destroy, :show, :index, :update]
    resources :borrowings, only: [:create, :destroy, :show]
  end
  end
