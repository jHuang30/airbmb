class Api::ReviewsController < ApplicationController

    before_action :ensure_logged_in

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.spot_id = params[:spot_id]

        if @review.save
            render :index
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index
        @reviews = Review.where(spot_id: params[:spot_id])
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :index
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
    end

    def review_params
        params.require(:review).permit(:body, :rating, :spot_id)
    end

end