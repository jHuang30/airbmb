
@spots.each do |spot|
    json.set! spot.id do 
        json.partial! 'api/spots/spot', spot: spot
            json.amenities do
                spot.amenities.each do |amenity|
                    json.set! amenity.id do
                    json.extract! amenity, :name, :sym
                    end 
                end 
            end
            # json.bookings do 
            #     spot.bookings.each do |booking|
            #         json.set! booking.id do 
            #             json.extract! booking, :start_date, :end_date, :num_guests
            #         end
            #     end
            # end
        if spot.photos.attached?
            json.photoUrls spot.photos.map { |file| url_for(file) }
        end
    end
end