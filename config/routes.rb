ScrumPresentation::Application.routes.draw do
  get "presentations/index"

  root :to => 'presentations#index'
end
