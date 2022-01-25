namespace :merchants do
  namespace :api do
    namespace :v1 do
      resources :merchants
      resources :shops do
        resources :products
        resources :adverts
      end
      resources :products, only: [] do
        resources :variants
      end
      resources :adverts, only: [] do
        resources :variant_configurations
      end
      resources :variants, only: [] do
        resources :variant_options, only: [:create, :update]
      end
    end
  end
end