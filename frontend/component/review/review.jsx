import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../action/modal_actions";
import { createReview } from "../../action/reveiw_actions";

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createReview: (review, spotId) => dispatch(createReview(review, spotId))
  };
};

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: null, rating: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.createReview(this.state, this.props.);
  }

  render() {
    return (
      <form className="review-form" onSubmit={this.handleSubmit}>
        <p className="close-button" onClick={this.props.closeModal}>
          &times;
        </p>
        <p className="review-form-stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </p>
        <textarea
          className="review-body"
          cols="30"
          rows="13"
          placeholder="comments"
          onChange={this.update("body")}
        />
        <button className="submit-review">Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  mdp
)(Review);
