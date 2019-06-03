class CreateAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities do |t|
      t.string :name, null: false
      t.string :sym, null: false
      t.timestamps
    end
  end
end
