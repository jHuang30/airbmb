# == Schema Information
#
# Table name: spots
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :text             not null
#  address      :text             not null
#  lat          :float            not null
#  long         :float            not null
#  price        :integer
#  host_id      :integer          not null
#  num_bedrooms :integer          not null
#  num_beds     :integer          not null
#  num_guests   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Spot < ApplicationRecord 
    validates :title, :description, :address, :lat, :long, :price, :host_id,
              :num_bedrooms, :num_beds, :num_guests, :spotType, :num_bathrooms, 
              :location, presence: true;
    
    belongs_to :host,
        foreign_key: :host_id,
        class_name: 'User'
     
    has_many :amenities_spots,
        foreign_key: :spot_id,
        class_name: 'AmenitiesSpot'

    has_many :bookings,
        foreign_key: :spot_id,
        class_name: 'Booking'

    has_many :reviews,
        foreign_key: :spot_id,
        class_name: 'Review'

    has_many :amenities,
        through: :amenities_spots,
        source: :amenity

    has_many_attached :photos

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("long > ?", bounds[:southWest][:lng])
        .where("long < ?", bounds[:northEast][:lng])
    end


end
