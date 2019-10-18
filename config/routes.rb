Rails.application.routes.draw do
  resources :training_events, only: [:create,:show, :update, :index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
