class Api::ReviewsController < ApplicationController

    before_action :ensure_logged_in

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.spot_id = params[:spot_id]

        if @review.save
            @user = @review.user
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
        params.require(:review).permit(:body, :rating, :spot_id)
    end

end