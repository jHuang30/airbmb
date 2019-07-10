import * as ReviewAPIUtil from "../util/review.api.util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_USER = "RECEIVE_REVIEW_USER";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const DELETE_REVIEW_ERRORS = 'DELETE_REVIEW_ERRORS'

const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveReviewAndUser = payload => ({
  type: RECEIVE_REVIEW_USER,
  review: payload.review,
  user: payload.user,
  booking: payload.booking
});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  reviewId: review.id
});

const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const deleteReviewErrors = () => ({
  type: DELETE_REVIEW_ERRORS
});

export const fetchReviews = spotId => dispatch => {
  return ReviewAPIUtil.fetchReviews(spotId).then(reviews =>
    dispatch(receiveAllReviews(reviews))
  );
};

export const fetchReview = (id, spotId) => dispatch => {
  return ReviewAPIUtil.fetchReview(id, spotId).then(review =>
    dispatch(receiveReview(review))
  );
};

export const createReview = (review, spotId, bookingId) => dispatch => {
  return ReviewAPIUtil.createReview(review, spotId, bookingId).then(
    payload => dispatch(receiveReviewAndUser(payload)),
    err => {
      return dispatch(receiveReviewErrors(err.responseJSON));
    }
  );
};

export const updateReview = (review, spotId) => dispatch => {
  return ReviewAPIUtil.updateReview(review, spotId).then(
    review => dispatch(receiveReview(review)),
    err => {
      return dispatch(receiveReviewErrors(err.responseJSON));
    }
  );
};

export const deleteReview = (reviewId, spotId) => dispatch => {
  return ReviewAPIUtil.deleteReview(reviewId, spotId).then(review =>
    dispatch(removeReview(review))
  );
};
