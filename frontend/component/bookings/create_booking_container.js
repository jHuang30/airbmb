import { connect } from "react-redux";
import BookingForm from "./booking";
import { createBooking } from "../../action/booking_action";
import { openModal } from "../../action/modal_actions";
import moment from "moment";
import { storeBooking } from "../../action/booking_action";

const msp = (state, ownProps) => {
  const blockedDates = [];
  if (state.entities.bookings) {
    const booked = Object.values(state.entities.bookings);
    booked.forEach(booking => {
      let sDate = moment(booking.start_date);
      const eDate = moment(booking.end_date);
      while (sDate < eDate) {
        blockedDates.push(sDate);
        sDate = moment(sDate, "MM/DD/YYYY").add(1, "days");
      }
    });
  }

  return {
    booking: { startDate: null, endDate: null, numGuest: 1 },
    formType: "Create Booking",
    user: state.session.id,
    blockedDates,
    reviewIds: ownProps.spot.review_ids,
    reviews: Object.values(state.entities.reviews)
  };
};

const mdp = dispatch => {
  return {
    action: (booking, spotId) => dispatch(createBooking(booking, spotId)),
    openModal: modal => dispatch(openModal(modal)),
    storeBooking: booking => dispatch(storeBooking(booking))
  };
};

export default connect(
  msp,
  mdp
)(BookingForm);
