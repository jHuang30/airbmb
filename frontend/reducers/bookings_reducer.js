import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING } from '../action/booking_action';

const bookingsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_BOOKINGS:
            return action.bookings;
        case RECEIVE_BOOKING:
            return Object.assign({}, {[action.booking.id]: action.booking});
        case REMOVE_BOOKING:
            const newState = Object.assign({},state);
            newState.delete(action.bookingId);
            return newState;
        default:
            return state;

    }
}   

export default bookingsReducer;