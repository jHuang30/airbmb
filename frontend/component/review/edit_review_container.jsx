import React from "react";
import { connect } from "react-redux";
import { updateReview } from "../../action/reveiw_actions";
import { withRouter } from "react-router-dom";
import Review from "./review";
import { closeModal } from "../../action/modal_actions";
import { deleteReviewErrors } from "../../action/reveiw_actions";

const msp = (state, ownProps) => {
  const defaultReview = {
    accuracy: null,
    communication: null,
    cleanliness: null,
    location: null,
    checkin: null,
    value: null,
    body: ""
  };
  const review = ownProps.review || defaultReview;
  const errors = state.errors.review;
  return { review, errors };
};

const mdp = dispatch => {
  return {
    action: (review, spotId) => dispatch(updateReview(review, spotId)),
    closeModal: () => dispatch(closeModal()),
    deleteErrors: () => dispatch(deleteReviewErrors())
  };
};

class EditReview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      action,
      review,
      spotId,
      closeModal,
      deleteErrors,
      errors
    } = this.props;
    return (
      <Review
        action={action}
        review={review}
        spotId={spotId}
        closeModal={closeModal}
        deleteErrors={deleteErrors}
        errors={errors}
      />
    );
  }
}

export default withRouter(
  connect(
    msp,
    mdp
  )(EditReview)
);
