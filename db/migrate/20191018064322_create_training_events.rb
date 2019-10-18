class CreateTrainingEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :training_events do |t|
      t.string :name, null: false
      t.string :description
      t.string :department, null: false
      t.string :duration, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.integer :room_number, null: false

      t.timestamps
    end
  end
end
