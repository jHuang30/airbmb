import * as ReviewAPIUtil from '../util/review.api.util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchReviews = spotId => dispatch => {
    return (
        ReviewAPIUtil.fetchReviews(spotId).then(reviews => dispatch(receiveAllReviews(reviews)))
    )
}

export const fetchReview = (id, spotId) => dispatch => {
    return (
        ReviewAPIUtil.fetchReview(id, spotId).then(review => dispatch(receiveReview(review)))
    )
}

export const createReview = (review, spotId) => dispatch => {
    return (
        ReviewAPIUtil.createReview(review, spotId).then(review => dispatch(receiveReview(review)))
    )
}

export const updateReview = (review, spotId) => dispatch => {
    return (
        ReviewAPIUtil.updateReview(review, spotId).then(review => dispatch(receiveReview(review)))
    )
}

export const deleteReview = (reviewId, spotId) => dispatch => {
    return (
        ReviewAPIUtil.deleteReview(reviewId, spotId).then(review => dispatch(removeReview(review)))
    )
}