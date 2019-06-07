import * as BookingAPIUtil from '../util/booking_api.util'

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

const receiveAllBookings = bookings => ({
    type: RECEIVE_ALL_BOOKINGS,
    bookings
})

const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
})

const removeBooking = bookingId => ({
    type: REMOVE_BOOKING,
    bookingId
})


export const fetchBookings = () => dispatch => (
    BookingAPIUtil.fetchBookings().then(bookings => dispatch(receiveAllBookings(bookings)))
);

export const fetchBooking = id => dispatch => (
    BookingAPIUtil.fetchBooking(id).then(booking => dispatch(receiveBooking(booking)))
);

export const createBooking = (booking, spotId) => dispatch => (
    BookingAPIUtil.createBooking(booking, spotId).then(booking => dispatch(receiveBooking(booking)))
);

export const updateBooking = booking => dispatch => (
    BookingAPIUtil.updateBooking(booking).then(booking =>dispatch(receiveBooking(booking)))
);

export const deleteBooking = bookingId => dispatch => (
    BookingAPIUtil.deleteBooking(bookingId).then(postId => dispatch(removeBooking(bookingId)))
)
