class Booking < ApplicationRecord 
    validates :spot_id, :user_id, :num_guests, :start_date, :end_date, presence: true

    belongs_to :user,
        class_name: 'User'

    belongs_to :spot,
        class_name: 'Spot'

    has_many :reviews,
        class_name: 'Review'
end