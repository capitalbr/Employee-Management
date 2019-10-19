Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :training_events, only: [:create,:show, :update, :index]
  end
  root "static_pages#root"
end
