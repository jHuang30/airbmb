// import {
//   RECEIVE_ALL_REVIEWS,
//   RECEIVE_REVIEW,
//   REMOVE_REVIEW
// } from "../action/reveiw_actions";
import { RECEIVE_SPOT } from "../action/spot_action";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
      // const ids = Object.keys(action.reviews);
      // const reviewArrays = [];
      // ids.forEach(id => {
      //   id = parseInt(id);
      //   const info = action.reviews[id];
      //   reviewArrays.push(info);
      // });
      return Object.assign({}, action.reviews);
    default:
      return state;
  }
};

export default reviewsReducer;
