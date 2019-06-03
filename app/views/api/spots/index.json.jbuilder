@spots.each do |spot|
    json.set! spot.id do 
        json.partial! 'api/spots/spot', spot: spot
        if spot.photos.attached?
            json.photoUrls spot.photos.map { |file| url_for(file) }
        end
    end
end