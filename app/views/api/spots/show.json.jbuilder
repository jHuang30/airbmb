json.partial! "api/spots/spot", spot: @spot

# json.ameinites do
#     json.array! @spot.amenities.map{|amenity| amenity.id}
# end


if @spot.photos.attached?
        json.photoUrls @spot.photos.map { |file| url_for(file) }
end

# json.photoUrls @spot.photos.map { |file| url_for(file) }

json.amenities do
  @spot.amenities.each do |amenity|
    json.set! amenity.id do
      json.extract! amenity, :name, :sym
    end 
  end 
end

json.bookings do 
  @spot.bookings.each do |booking|
    json.set! booking.id do 
      json.extract! booking, :start_date, :end_date, :num_guests
    end
  end
end

