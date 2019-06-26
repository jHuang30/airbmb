import React from "react";
import { connect } from "react-redux";
import { fetchBookings } from "../../action/booking_action";
import { fetchSpots } from "../../action/spot_action";
import BookingDetail from "./booking_detail";
import { withRouter } from "react-router-dom";

const msp = ({ entities: { users, bookings, spots }, session }) => {
  return {
    currentUser: users[session.id],
    bookings: bookings,
    spots: spots
  };
};

const mdp = dispatch => {
  return {
    fetchBookings: (filter, value) => dispatch(fetchBookings(filter, value)),
    fetchSpots: () => dispatch(fetchSpots())
  };
};

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push("/spots");
  }

  componentDidMount() {
    this.props.fetchBookings("user_id", this.props.currentUser.id);

    this.props.fetchSpots();
  }

  render() {
    let allBookings;
    if (this.props.bookings) {
      allBookings = Object.values(this.props.bookings);
    }

    const bookingDetails = [];

    if (Object.values(this.props.spots).length !== 0) {
      const spots = this.props.spots;
      allBookings.forEach((booking, idx) => {
        bookingDetails.push(
          <BookingDetail
            key={idx}
            booking={booking}
            spot={spots[booking.spot_id]}
          />
        );
      });
    }

    return (
      <div className="booking-container">
        <p className="my-booking">
          <span>
            <i className="far fa-calendar-check" />
          </span>
          My Bookings
        </p>
        <button type="button" className="go-back" onClick={this.handleClick}>
          Go back to all spots
        </button>
        <div className="user-booking-page">{bookingDetails}</div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    msp,
    mdp
  )(Account)
);