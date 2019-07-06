import * as BookingAPIUtil from "../util/booking_api.util";

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const CREATE_BOOKING = "CREATE_BOOKING";

const receiveAllBookings = (filter, value) => ({
  type: RECEIVE_ALL_BOOKINGS,
  filter,
  value
});


const receiveBooking = payload => {
  return {
    type: RECEIVE_BOOKING,
    booking: payload.booking,
    user: payload.user
  };
};

const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
});

export const storeBooking = booking => ({
  type: CREATE_BOOKING,
  booking
});

export const fetchBookings = (filter, value) => dispatch => {
  return BookingAPIUtil.fetchBookings(filter, value).then(bookings =>
    dispatch(receiveAllBookings(bookings))
  );
};

export const fetchBooking = id => dispatch =>
  BookingAPIUtil.fetchBooking(id).then(booking =>
    dispatch(receiveBooking(booking))
  );

export const createBooking = (booking, spotId) => dispatch => {
  return BookingAPIUtil.createBooking(booking, spotId).then(payload =>
    dispatch(receiveBooking(payload))
  );
};

export const updateBooking = booking => dispatch =>
  BookingAPIUtil.updateBooking(booking).then(booking =>
    dispatch(receiveBooking(booking))
  );

export const deleteBooking = bookingId => dispatch =>
  BookingAPIUtil.deleteBooking(bookingId).then(bookingId =>
    dispatch(removeBooking(bookingId))
  );
