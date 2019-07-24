class Api::SpotsController < ApplicationController

    def create
        @spot = Spot.new(spot_params)
        if @spot.save
            render :create
        else
            render json: @spot.errors.full_messages, status: 422
        end
    end



    def show
        @spot = Spot.with_attached_photos.includes(:amenities, :bookings, :reviews).find(params[:id])
        @amenities = @spot.amenities
        @bookings = @spot.bookings
        @reviews = @spot.reviews  

        render :show
    end

    def index
        if  bounds
            @spots = Spot.with_attached_photos.includes(:amenities, :bookings, :reviews).in_bounds(bounds)
        else 
            @spots = Spot.with_attached_photos.includes(:amenities, :bookings, :reviews).all
        end
    end

    def update
        @spot = Spot.find(params[:id])

        if @spot.update(spot_params)
            render :show
        else
            render json: @spot.errors.full_messages, status: 422
        end
    end

    def destroy
        spot = Spot.find(params[:id])
        spot.destroy
        
    end

    def spot_params
        params.permit(:title, :description, :address, :price, :num_bedrooms, :lat, :long, :num_beds, :num_guests, :num_bathrooms, :spotType, :location, photos:[])
    end

    def bounds
        params[:bounds]
    end
    
end