class CreateAmenitiesSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities_spots do |t|
      t.integer :amenity_id, null: false
      t.integer :spot_id, null: false 
      t.timestamps
    end
  end
end
