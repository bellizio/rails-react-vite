Rails.application.routes.draw do
  root 'homepage#index'
  get 'help', to: 'helppage#index'
  # important for when there are react routes that extend beyond this route - without it, refreshing a page at a route such as /help/account-settings will throw a server error
  get "help/*anything", to: "helppage#index"
  get 'browse', to: 'browsepage#index'

  namespace :api do
    namespace :v1 do
      resources :characters, only: [:index]
    end
  end
end
