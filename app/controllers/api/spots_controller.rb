class Api::SpotsController < ApplicationController

    def create
        @spot = Spot.new(spots_params)
        if @spot.save
            render :create
        else
            render json: @spot.errors.full_messages, status: 422
        end
    end

    def show
        @spot = Spot.includes(:amenities).find(params[:id])
        @amenities = @spot.amenities

        render :show
    end

    def index
        @spots = Spot.all
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

    def spots_params
        params.require(:spot).permit(:title, :description, :address, :price, :num_bedrooms, :lat, :long, :num_beds, :num_guests, :num_bathrooms, :spotType, :location, photos:[])
    end
end