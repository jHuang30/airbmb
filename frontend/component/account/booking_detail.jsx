import React from "react";
import { deleteBooking } from "../../action/booking_action";
// import { createReview } from "../../action/reveiw_actions";
import { connect } from "react-redux";
import { openModal } from "../../action/modal_actions";
import moment from "moment";
import { withRouter } from "react-router-dom";

const msp = state => {
  return {};
};

const mdp = dispatch => {
  return {
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

class BookingDetail extends React.Component {
  constructor(props) {
    props;
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleReview = this.handleReview.bind(this);
  }

  handleCancel(bookingId) {
    this.props.deleteBooking(bookingId);
  }

  handleReview() {
    const endDate = this.props.booking.end_date;
    const validToReview = moment(endDate).isBefore(moment());

    if (validToReview) {
      this.props.history.push(`/spots/${this.props.spot.id}`);
      this.props.openModal("review");
    } else {
      this.props.openModal("cannotReview");
    }
  }

  render() {
    const spot = this.props.spot;
    const booking = this.props.booking;
    return (
      <div className="booking-detail">
        <img src={spot.photoUrls[0]} alt="booking_detail" />
        <div className="booking-info">
          <p>{spot.title}</p>
          <p>Number of Guest: {booking.num_guests}</p>
          <p>Check-in Date: {booking.start_date}</p>
          <p>Check-out Date: {booking.end_date}</p>
          <p>Price: {spot.price}</p>
          <button
            className="cancel-booking"
            type="button"
            onClick={() => this.handleCancel(booking.id)}
          >
            Cancel
          </button>
          <button
            className="review"
            type="button"
            onClick={() => this.handleReview()}
          >
            Write Review
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    msp,
    mdp
  )(BookingDetail)
);
