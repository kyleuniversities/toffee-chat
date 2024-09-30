Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  post "/oauth/login", to: "oauth#login"
  post "/oauth/logout", to: "oauth#logout"
  get "up" => "rails/health#show", as: :rails_health_check
end
