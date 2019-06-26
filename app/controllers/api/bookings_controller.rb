class Api::BookingsController < ApplicationController


    def create
        @booking = Booking.new(booking_params)

        @booking.start_date = DateTime.strptime(booking_params[:start_date], '%m/%d/%Y')
        @booking.end_date = DateTime.strptime(booking_params[:end_date], '%m/%d/%Y')

        @booking.user_id = current_user.id
        @booking.spot_id = params[:spot_id]


        if @booking.save
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def show
        @booking = Booking.find(params[:id])

        render :show
    end

    def update
        @booking = Booking.find(params[:id])
        if @booking.save(booking_params)
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy
        render :show
    end

    def index
        params[:user_id] ? @bookings = Booking.where(user_id: params[:user_id].to_i) : Booking.all
        # @bookings = Bookings.all
    end

    def booking_params
        params.require(:booking).permit(:user_id, :num_guests, :start_date, :end_date, :spot_id)
    end
end