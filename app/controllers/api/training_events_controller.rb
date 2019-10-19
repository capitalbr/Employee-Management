class Api::TrainingEventsController < ApplicationController
  def show
    @training_event = TrainingEvent.find(params[:id])
  end

  def index
    if params[:training_event][:query] != "all"
      # This is wher I ran out of time
      
    else
      @training_event = TrainingEvent.all
    end
  end

  def create
    @training_event = TrainingEvent.new(training_event_params)
    
    if @training_event.save
      render "api/training_events/show"
    else
      render json: @training_event.errors.full_messages, status: 422
    end
  end

  def update
    @training_event = TrainingEvent.find(params[:id])

    if @training_event.update(training_event_params)
      render "api/training_events/show"
    else
      render json: @training_event.errors.full_messages, status: 422
    end
  end

  private 
  def training_event_params
    params.require(:training_event)
    .permit(
      :id,
      :name, 
      :description,
      :department,
      :duration,
      :date,
      :time,
      :room_number,
      :query
      )
  end

end
