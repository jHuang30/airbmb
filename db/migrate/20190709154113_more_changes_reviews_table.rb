class MoreChangesReviewsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :rating
    add_column :reviews, :accuracy, :integer, null: false
    add_column :reviews, :communication, :integer, null: false
    add_column :reviews, :cleanliness, :integer, null: false
    add_column :reviews, :location, :integer, null: false
    add_column :reviews, :checkin, :integer, null: false
    add_column :reviews, :value, :integer, null: false

  end
end
