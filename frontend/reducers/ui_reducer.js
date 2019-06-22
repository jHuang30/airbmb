import { combineReducers } from 'redux';
import modal from './modal_reducer';
import createBooking from './create_booking_reducer'
import filter from './filter_reducer'

export default combineReducers({
    modal,
    createBooking,
    filter,
})

