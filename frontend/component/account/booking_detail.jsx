import React from "react";
import { deleteBooking } from "../../action/booking_action";
import { connect } from "react-redux";
import { openModal } from "../../action/modal_actions";
import moment from "moment";
import { withRouter } from "react-router-dom";

const msp = state => {
  return {
    reviews: state.entities.reviews
  };
};

const mdp = dispatch => {
  return {
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    openModal: (modal, bookingId) => dispatch(openModal(modal, bookingId))
  };
};

class BookingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.writeOrUpdate = "Write Review";
  }

  handleCancel(bookingId) {
    this.props.deleteBooking(bookingId);
  }

  handleReview(bookingId, spotId, review) {

    const endDate = this.props.booking.end_date;
    const validToReview = moment(endDate).isBefore(moment());

    if (validToReview) {
      this.props.history.push(`/spots/${this.props.spot.id}`);
      if (this.writeOrUpdate === "Write Review") {
        this.props.openModal("review", { bookingId: bookingId });
      } else {
        this.props.openModal("updateReview", {
          info: {
            review: review,
            spotId: spotId
          }
        });
      }
    } else {
      this.props.openModal("cannotReview");
    }
  }

  render() {
    const spot = this.props.spot;
    const booking = this.props.booking;
    let review;
    if (booking.review_ids) {
      this.writeOrUpdate =
        booking.review_ids.length > 0 ? "Update Review" : "Write Review";
      review = this.props.reviews[booking.review_ids[0]];
    }
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
            onClick={() => this.handleReview(booking.id, spot.id, review)}
          >
            {this.writeOrUpdate}
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
