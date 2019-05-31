class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :address, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.integer :price
      t.integer :host_id, null:false
      t.integer :num_bedrooms, null: false
      t.integer :num_beds, null: false
      t.integer :num_guests, null: false
      t.timestamps
    end
    add_index :spots, :address, unique: true
    add_index :spots, :lat, unique: true
    add_index :spots, :long, unique: true
  end
end
