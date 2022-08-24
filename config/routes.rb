Rails.application.routes.draw do
  
  resources :attachments
  resources :repositories
  resources :users, only: [:create]

  get '/me', to: 'sessions#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


  get '/userrepo', to: 'users#repos'

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
