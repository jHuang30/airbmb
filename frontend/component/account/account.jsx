import React from 'react';
import { connect } from 'react-redux';
import { fetchBooking } from '../../action/booking_action'

const msp = ({ entities: { users, bookings }, session }) => {
    // debugger
    return {
        currentUser: users[session.id],
        // bookings: currentUser.
        bookings: bookings,
    }
};

const mdp = dispatch => {
    return {
        fetchBooking: (id) => dispatch(fetchBooking(id))
    }
}

class Account extends React.Component {
    constructor(props){
        // debugger
        super(props);
    }

    componentDidMount(){
        // debugger
        const bookingId = this.props.currentUser.booking_ids[0];
        this.props.fetchBooking(bookingId);
    }

    render(){
        const allBookings = Object.values(this.props.bookings)
        debugger
        return(
            <p>{allBookings.num_guests}</p>

        )
    }
}

export default connect(msp,mdp)(Account)

