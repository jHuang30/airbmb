import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../action/modal_actions";
import { createReview } from "../../action/reveiw_actions";
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) => {
  const pathname = ownProps.location.pathname;
  return {
    spotId: parseInt(pathname[pathname.length - 1])
  };
};

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
    this.getStar = this.getStar.bind(this);
    this.cancelStar = this.cancelStar.bind(this);
    this.selectStar = this.selectStar.bind(this);
    this.stars = document.getElementsByClassName("fa fa-star");
    this.checked = false;
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createReview(this.state, this.props.spotId)
      .then(this.props.closeModal());
  }

  getStar(star) {
    let i;
    let j;
    for (i = 0; i < this.stars.length; i++) {
      if (star === this.stars[i]) {
        for (j = 0; j <= i; j++) {
          this.stars[j].style.color = "#006c70";
        }
      }
    }
  }

  cancelStar() {
    if (!this.checked) {
      for (let i = 0; i < this.stars.length; i++) {
        this.stars[i].style.color = "black";
      }
    }
  }

  selectStar(star) {
    if (!this.checked) {
      this.checked = true;
    } else {
      this.checked = false;
    }
    for (let i = 0; i < this.stars.length + 1; i++) {
      if (star === i) {
        for (let j = 0; j < i; j++) this.stars[j].style.color = "#006c70";
      }
    }
    this.setState({ rating: star });
  }

  render() {
    return (
      <form className="review-form" onSubmit={this.handleSubmit}>
        <p className="close-button" onClick={this.props.closeModal}>
          &times;
        </p>
        {/* <p className="review-form-stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </p> */}
        <p className="review-form-stars">
          <span
            // onMouseOver={() => this.getStar(1)}
            // onMouseOut={() => this.cancelStar(1)}
            onClick={() => this.selectStar(1)}
            className="fa fa-star checked"
          />
          <span
            // onMouseOver={() => this.getStar(2)}
            // onMouseOut={() => this.cancelStar(2)}
            onClick={() => this.selectStar(2)}
            className="fa fa-star"
          />
          <span
            // onMouseOver={() => this.getStar(3)}
            // onMouseOut={() => this.cancelStar(3)}
            onClick={() => this.selectStar(3)}
            className="fa fa-star"
          />
          <span
            // onMouseOver={() => this.getStar(4)}
            // onMouseOut={() => this.cancelStar(4)}
            onClick={() => this.selectStar(4)}
            className="fa fa-star"
          />
          <span
            // onMouseOver={() => this.getStar(5)}
            // onMouseOut={() => this.cancelStar(5)}
            onClick={() => this.selectStar(5)}
            className="fa fa-star"
          />
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

export default withRouter(
  connect(
    msp,
    mdp
  )(Review)
);
