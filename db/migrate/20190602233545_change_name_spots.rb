class ChangeNameSpots < ActiveRecord::Migration[5.2]
  def change
    rename_column :spots, :type, :spotType
  end
end
