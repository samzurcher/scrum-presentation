class PresentationsController < ApplicationController
  def index
    @zoom_factor = params[:zoomFactor] || "1"
  end
end
