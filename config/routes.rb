Rails.application.routes.draw do
  root 'homepage#index'
  get 'help', to: 'helppage#index'
  get 'browse', to: 'browsepage#index'

  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index]
    end
  end
end
