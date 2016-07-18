Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do

    resources :songs do
      collection do
        get 'results', action: :query
      end
      resources :annotations, only: [:create]
      resources :comments, only: [:index, :create]
    end

    resources :comments, only: [:destroy]
    resources :annotations, only: [:index, :destroy] do
      resources :comments, only: [:index, :create]
    end

    resources :upvotes, only: [:create, :destroy]
    resources :artists, only: [:index, :create]
    resources :albums, only: [:index, :create]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
