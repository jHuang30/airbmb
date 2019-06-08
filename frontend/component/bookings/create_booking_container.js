import { connect } from 'react-redux';
import BookingForm from './booking'
import { createBooking } from '../../action/booking_action';
import { openModal } from '../../action/modal_actions';
import moment from 'moment';

const msp = (state, ownProps) => {
    debugger
    const blockedDates = []
    if (ownProps.spot.bookings){
        const booked = Object.values(ownProps.spot.bookings);
        booked.forEach(booking => {
            let sDate = moment(booking.start_date);
            const eDate = moment(booking.end_date);
            while(sDate < eDate){
                blockedDates.push(sDate)
                sDate = moment(sDate, "DD-MM-YYYY").add(1, 'days')
            }
        })
    }

    debugger
    return {
        current_user: state.session.id,
        booking: { startDate: null, endDate: null, numGuest: 1 },
        formType: 'Create Booking',
        user: state.session.id,
        blockedDates
    }
}



const mdp = dispatch => {
    return {
        action: (booking, spotId) => dispatch(createBooking(booking, spotId)),
        openModal : modal => dispatch(openModal(modal)),
    }
}


export default connect(msp, mdp)(BookingForm)