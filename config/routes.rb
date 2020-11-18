Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users
  root to: 'pages#home'
  get "popular", to: "pages#popular"
  get "upcoming", to: "pages#upcoming"
  get "search", to: "pages#empty_search"
  get "search/:query", to: "pages#search"
  get "movies/:id", to: "pages#movies"
  get "lists", to: "list#index"
  get "lists/new", to: "list#new"
  post "lists", to: "list#create"
  get "lists/:id", to: "list#show", as: "list"
  post "movie/:id", to: "content#save_to_list", as: "save_movie"
  delete "lists/:id/:contentid", to: "content#destroy", as: "delete_content"
  delete "lists/:id", to: "list#destroy", as: "delete_list"
end
