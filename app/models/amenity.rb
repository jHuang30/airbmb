# == Schema Information
#
# Table name: amenities
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  sym        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Amenity < ApplicationRecord 
    validates :name, presence:true, uniqueness: true
    validates :sym, presence: true;

    has_many :amenities_spots,
    foreign_key: :amenity_id,
    class_name: 'AmenitiesSpot'

    has_many :spots,
        through: :amenities_spots,
        source: :spot
end
