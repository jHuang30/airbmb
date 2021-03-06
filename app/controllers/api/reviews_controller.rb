class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.spot_id = params[:spot_id]
        @review.booking_id = params[:bookingId]

        if @review.save
            @user = @review.user
            @booking = @review.booking
            render :create
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index
        if params[:spot_id] != 'undefined'
            @reviews = Review.where(spot_id: params[:spot_id])
        else
            @reviews = Review.all
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy

        render :show
    end

    def review_params
        params.require(:review).permit(:body, :accuracy, :communication, :cleanliness, :location, :checkin, :value, :spot_id)
    end

end