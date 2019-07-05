import { connect } from "react-redux";
import { closeModal, openModal } from "../../action/modal_actions";
import { createReview } from "../../action/reveiw_actions";
import { withRouter } from "react-router-dom";
import Review from "./review";

const msp = (state, ownProps) => {
  const pathname = ownProps.location.pathname;
  const review = { rating: 0, body: "" };
  return {
    spotId: parseInt(pathname.split("/")[2]),
    review
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    action: (review, spotId) => dispatch(createReview(review, spotId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(Review)
);
