
json.spot do 
  json.partial! "api/spots/spot", spot: @spot
  if @spot.photos.attached?
          json.photoUrls @spot.photos.map { |file| url_for(file) }
  end
end



# json.photoUrls @spot.photos.map { |file| url_for(file) }

json.amenities do
  @spot.amenities.each do |amenity|
    json.set! amenity.id do
      json.extract! amenity, :name, :sym
    end 
  end 
end

# json.reviews do 
#   @spot.reviews.each do |review|
#     json.set! review.id do
#       json.extract! review, :body, :rating
#     end
#   end
# end

json.bookings do 
  @bookings.each do |booking|
    json.set! booking.id do 
      json.partial! 'api/bookings/booking', booking: booking
    end
  end
end

# # json.bookings do 
#   @spot.bookings.each do |booking|
#     json.set! booking.id do 
#       json.extract! booking, :start_date, :end_date, :num_guests
#     end
#   end
# # end

json.reviews do 
  @reviews.each do |review|
    json.set! review.id do 
      json.partial! 'api/reviews/review', review: review
    end
  end
end



# json.amenities do 
#   @amenities.each do |amenity|
#     json.partial 'api/amenities/amenity', amenity: amenity
#   end
# end