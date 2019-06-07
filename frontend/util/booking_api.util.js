export const fetchBookings = () => (
    $.ajax({
        method: 'GET',
        url: 'api/bookings'
    })
);


export const fetchBooking = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/bookings/${id}`
    })
);


export const createBooking = (booking, spotId) => {
    return (
    $.ajax({
        method: 'POST',
        url: `api/spots/${spotId}/bookings`,
        data: {booking}
    }))
};


export const updateBooking = (booking) => (
    $.ajax({
        method: 'PATCH',
        url: `api/bookings/${booking.id}`,
        data: {booking}
    })
);


export const deleteBooking = (id) => (
    $.ajax ({
        method: 'DELETE',
        url: `api/bookings/${id}`
    })
);
