Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :songs
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
