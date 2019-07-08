class Review < ApplicationRecord 
    validates :spot_id, :user_id, :body, :rating,  presence: true

    belongs_to :user,
        class_name: 'User'

    belongs_to :spot,
        class_name: 'Spot'
        
    belongs_to :booking,
        class_name: 'Booking'
end