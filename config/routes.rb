Rails.application.routes.draw do
  
  resources :attachments
  resources :repositories
  resources :users, only: [:create, :update]

  #session
  get '/me', to: 'sessions#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

#users
  get '/userrepo', to: 'users#repos'
  

  #repositories
  get '/repoattachments', to:'repositories#attachments'
  get '/specificattachments/:id', to:'repositories#specific'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
