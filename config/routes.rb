Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show, :create, :update, :destroy] do
      resources :amenities, only: [:create, :destroy]
      resources :bookings, only:[:create]
      resources :reviews, only:[:show, :create, :update, :destroy, :index]
    end

    resources :bookings, only: [ :show, :update, :destroy]
  end
  root 'static_pages#root'
end
  
