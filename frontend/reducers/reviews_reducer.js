import { RECEIVE_SPOT } from "../action/spot_action";
import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  RECEIVE_REVIEW_USER,
  RECEIVE_ALL_REVIEWS,
} from "../action/reveiw_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
      return Object.assign({}, action.reviews);
    case RECEIVE_ALL_REVIEWS:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      const newState = Object.assign({}, state);
      delete newState[action.reviewId];
      return newState;
    case RECEIVE_REVIEW_USER:
      return Object.assign({}, state, { [action.review.id]: action.review });
    default:
      return state;
  }
};

export default reviewsReducer;
