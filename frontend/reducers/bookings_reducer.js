import {
  RECEIVE_ALL_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING
} from "../action/booking_action";
import { RECEIVE_SPOT } from "../action/spot_action";
import { RECEIVE_REVIEW_USER, REMOVE_REVIEW } from "../action/reveiw_actions";

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.filter;
    case RECEIVE_BOOKING:
      return Object.assign({}, state, { [action.booking.id]: action.booking });
    case RECEIVE_SPOT:
      return Object.assign({}, action.bookings);
    case REMOVE_BOOKING:
      const newState = Object.assign({}, state);
      delete newState[action.bookingId.id];
      return newState;
    // case REMOVE_REVIEW:
    //   const newState2 = Object.assign({},state);

    //   return
    case RECEIVE_REVIEW_USER:
      return Object.assign({}, state, { [action.booking.id]: action.booking });
    default:
      return state;
  }
};

export default bookingsReducer;
