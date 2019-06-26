// import {
//   RECEIVE_ALL_REVIEWS,
//   RECEIVE_REVIEW,
//   REMOVE_REVIEW
// } from "../action/reveiw_actions";
import { RECEIVE_SPOT } from "../action/spot_action";
import { RECEIVE_REVIEW } from "../action/reveiw_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
      return Object.assign({}, action.reviews);
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review });
    default:
      return state;
  }
};

export default reviewsReducer;
