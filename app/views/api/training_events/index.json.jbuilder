
if @training_event
  @training_event.each do |event|
    json.set! event.id do
      json.id event.id
      json.name event.name
      json.description event.description
      json.department event.department
      json.duration event.duration
      json.date event.date
      json.time event.time
      json.room_number event.room_number
    end
  end
end