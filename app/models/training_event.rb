class TrainingEvent < ApplicationRecord
  validates :name, :department, :duration, :date, :time, 
    :room_number, presence: true
end
