import React from "react";
import { connect } from "react-redux";
import { updateReview } from "../../action/reveiw_actions";
import { withRouter } from "react-router-dom";
import Review from "./review";
import { closeModal } from "../../action/modal_actions";

const msp = (state, ownProps) => {
  const defaultReview = { rating: 0, body: "" };
  const review = ownProps.review || defaultReview;

  return { review };
};

const mdp = dispatch => {
  return {
    action: (review, spotId) => dispatch(updateReview(review, spotId)),
    closeModal: () => dispatch(closeModal())
  };
};

class EditReview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { action, review, spotId, closeModal } = this.props;
    return (
      <Review
        action={action}
        review={review}
        spotId={spotId}
        closeModal={closeModal}
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
