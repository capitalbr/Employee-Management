class CreateTrainingEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :training_events do |t|
      t.string :name
      t.string :description
      t.string :department
      t.string :duration
      t.date :date
      t.time :time
      t.integer :room_number

      t.timestamps
    end
  end
end
