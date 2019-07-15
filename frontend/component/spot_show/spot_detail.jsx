import React from "react";
import IndexNavbar from "../navbar/index_nav";
import { openModal } from "../../action/modal_actions";
import DatePicker from "../calendar/show_calendar";
import BookingContainer from "../bookings/create_booking_container";
import SpotMap from "../spot_map/spot_map";
import { connect } from "react-redux";
import { deleteReview, updateReview } from "../../action/reveiw_actions";
import { withRouter } from "react-router-dom";
import SpotPic from "./spot_pic";
import SpotInfo from "./spot_info";
import SpotAmes from "./spot_ames";
import SpotReviews from "./spot_reviews";

const msp = state => {
  const reviewIds = state.session.id
    ? Object.values(state.entities.users)[0].review_ids
    : [];
  return {
    reviews: Object.values(state.entities.reviews),
    reviewIds
  };
};

const mdp = dispatch => {
  return {
    openModal: (modal, info) => dispatch(openModal(modal, info)),
    deleteReview: (reviewId, spotId) =>
      dispatch(deleteReview(reviewId, spotId)),
    updateReview: (review, spotId) => dispatch(updateReview(review, spotId))
  };
};

class SpotDetail extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.rating = 0;
  }

  // handleSubmit() {
  //   this.props.openModal("review");
  // }

  handleUpdate(review, spotId) {
    this.props.openModal("updateReview", {
      info: { review: review, spotId: spotId }
    });
  }

  handleDelete(reviewId, spotId) {
    this.props.deleteReview(reviewId, spotId);
  }

  componentDidMount() {
    this.props.reviews.forEach(review => {
      if (this.props.spot.review_ids.includes(review.id)) {
        this.rating +=
          review.accuracy +
          review.checkin +
          review.cleanliness +
          review.communication +
          review.location +
          review.value;
      }
    });
    this.rating = Math.round(
      this.rating / (this.props.spot.review_ids.length * 6)
    );
  }
  render() {
    const { spot } = this.props;

    let allReviews = [];

    const reviewIds = this.props.reviewIds;

    const spotId = parseInt(this.props.match.params.spotId);
    if (this.props.reviews.length !== 0) {
      this.props.reviews.forEach((review, idx) => {
        let reviewButton = null;
        if (reviewIds.includes(review.id)) {
          reviewButton = (
            <p className="review-buttons">
              <button onClick={() => this.handleUpdate(review, spotId)}>
                Update
              </button>
              <button onClick={() => this.handleDelete(review.id, spotId)}>
                Delete
              </button>
            </p>
          );
        }
        allReviews.push(
          <div className="review-section" key={idx}>
            <i className="far fa-comment-dots" />
            &nbsp;&nbsp;
            <span id="review-body">{review.body}</span>
            {reviewButton}
          </div>
        );
      });
    }
    return (
      <div>
        <IndexNavbar />
        <SpotPic spot={spot} />
        <div className="des-form-container">
          <div className="des-container">
            <SpotInfo spot={spot} />
            <SpotAmes spot={spot} />
            <div className="avail">Availability:</div>

            <DatePicker />

            {/* <button className="review-button" onClick={this.handleSubmit}>
                Write Review
              </button> */}
            {/* </div> */}
            <SpotReviews
              reviews={this.props.reviews}
              rating={this.rating}
              spot={spot}
            />

            <SpotMap spot={spot} />
          </div>

          <BookingContainer spot={spot} rating={this.rating} />
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    msp,
    mdp
  )(SpotDetail)
);
