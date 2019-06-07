import { connect } from 'react-redux';
import BookingForm from './booking'
import { createBooking } from '../../action/booking_action';

const msp = (state) => {

    return {
        current_user: state.session.id,
        booking: { startDate: null, endDate: null, numGuest: 1 },
        formType: 'Create Booking',
        // spot: Object.values(state.entities.spots)[0]
    }
}



const mdp = dispatch => {
    return {
        action: (booking, spotId) => dispatch(createBooking(booking, spotId)),
    }
}


export default connect(msp, mdp)(BookingForm)