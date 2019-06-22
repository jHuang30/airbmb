import { CREATE_BOOKING } from '../action/booking_action';

const createBookingReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case CREATE_BOOKING:
            return action.booking;
        default:
            return state;
    }
}

export default createBookingReducer;