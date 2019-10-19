# json.extract!(
#     @training_event,
#     :id,
#     :name,
#     :description,
#     :department,
#     :duration,
#     :date,
#     :time,
#     :room_number
#     )

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