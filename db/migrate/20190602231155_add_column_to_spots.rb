class AddColumnToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :type, :string
    add_column :spots, :location, :string
    add_column :spots, :num_bathrooms, :integer
  end
end
