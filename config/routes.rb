Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do

    resources :songs do
      resources :annotations, only: [:create, :destroy]
    end

    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
