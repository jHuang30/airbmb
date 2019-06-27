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
        @spot = Spot.includes(:amenities, :bookings, :reviews).find(params[:id])
        @amenities = @spot.amenities
        @bookings = @spot.bookings
        @reviews = @spot.reviews  

        render :show
    end

    def index
        # if spot_params[:location] && spot_params[:num_guests]
        #     cap_location = spot_params[:location].split.map{|word| word.capitalize}.join(" ")
        #     minNum = spot_params[:num_guests].to_i
        #     @spots = Spot.where(location: cap_location).where('num_guests > ?', minNum)
        #     if bounds
        #         bound_spots = Spot.in_bounds(bounds)
        #         @spots = @spots.select{|spot| bound_spots.include?(spot)}
        #     end

        # elsif spot_params[:location]
        #     cap_location = spot_params[:location].split.map{|word| word.capitalize}.join(" ")
        #     @spots = Spot.where(location: cap_location)
        #     # if bounds
        #         # bound_spots = Spot.in_bounds(bounds)
        #         # @spots = @spots.select{|spot| bound_spots.include?(spot)}
        #     # end

        # elsif spot_params[:num_guests]
        #     minNum = spot_params[:num_guests].to_i
        #     @spots = Spot.where('num_guests > ?', minNum)
        #     if bounds
        #         bound_spots = Spot.in_bounds(bounds)
        #         @spots = @spots.select{|spot| bound_spots.include?(spot)}
        #     end

        # elsif bounds
        #     @spots = Spot.in_bounds(bounds)

        # else
        #     @spots = Spot.all
        # end
        if  bounds
            @spots = Spot.in_bounds(bounds)
        else 
            @spots = Spot.all
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