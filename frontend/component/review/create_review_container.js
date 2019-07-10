import { connect } from "react-redux";
import { closeModal, openModal } from "../../action/modal_actions";
import { createReview } from "../../action/reveiw_actions";
import { withRouter } from "react-router-dom";
import Review from "./review";
import { deleteReviewErrors } from "../../action/reveiw_actions";

const msp = (state, ownProps) => {
  const pathname = ownProps.location.pathname;
  const review = {
    accuracy: null,
    communication: null,
    cleanliness: null,
    location: null,
    checkin: null,
    value: null,
    body: ""
  };
  return {
    spotId: parseInt(pathname.split("/")[2]),
    review,
    bookingId: ownProps.bookingId,
    errors: state.errors.review
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    action: (review, spotId, bookingId) =>
      dispatch(createReview(review, spotId, bookingId)),
    openModal: modal => dispatch(openModal(modal)),
    deleteErrors: () => dispatch(deleteReviewErrors())
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(Review)
);
