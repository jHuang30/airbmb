import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../action/modal_actions";

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

class NoReview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="no-review-form">
        <p className="close-button" onClick={this.props.closeModal}>
          &times;
        </p>
        <p className="no-review-text">Please come back after check out date</p>
      </div>
    );
  }
}

export default connect(
  null,
  mdp
)(NoReview);
