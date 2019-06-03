class AmenitiesSpot < ApplicationRecord 
    belongs_to :spot
    belongs_to :amenity
end