Rails.application.routes.draw do
  get("/",{to: "auctions#welcome", as: :root}) 

  namespace :api, defaults: {format: :json} do 
    namespace :v1 do
      resources :auctions, only:[:index, :show,  :create, :update ] do
        resources :bids, only: [:create]
      end
      resource :session, only: [:create, :destroy]
      get('/current_user', to: 'sessions#get_current_user')
      resources :users, only:[:create]
    end
  
  end

end

