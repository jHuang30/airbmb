import React from "react";
import { fetchSpot } from "../../action/spot_action";
import { connect } from "react-redux";

const mdp = dispatch => {
  return {
    fetchSpot: spotId => dispatch(fetchSpot(spotId))
  };
};

class SpotReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let accuracy, cleanliness, communication, checkin, value, location;
    accuracy = cleanliness = communication = checkin = value = location = 0;
    this.props.reviews.forEach(review => {
      accuracy += review.accuracy;
      cleanliness += review.cleanliness;
      communication += review.communication;
      checkin += review.checkin;
      value += review.value;
      location += review.location;
    });

    const text = [
      "Accuracy",
      "Location",
      "Communication",
      "Check-in",
      "Cleanliness",
      "Value"
    ];
    const detailedReviews = [];

    text.forEach((item, idx) => {
      let reviewScore;
      switch (item) {
        case "Accuracy":
          reviewScore = accuracy;
          break;
        case "Location":
          reviewScore = location;
          break;
        case "Communication":
          reviewScore = communication;
          break;
        case "Check-in":
          reviewScore = checkin;
          break;
        case "Cleanliness":
          reviewScore = cleanliness;
          break;
        case "Value":
          reviewScore = value;
          break;
        default:
          reviewScore = 0;
      }
      reviewScore = Math.round(reviewScore / this.props.reviews.length);

      const stars = [];
      let i = 0;
      while (i < reviewScore) {
        stars.push(<i key={i} className="fas fa-star" />);
        i++;
      }
      while (stars.length < 5) {
        stars.push(<i key={stars.length} className="far fa-star" />);
      }

      detailedReviews.push(
        <span className="option-stars" key={idx}>
          <span className="flex">
            <span className="options">{item}:</span>
            <span className="stars">{stars}</span>
          </span>
        </span>
      );
    });

    const starsxx = [];
    let i = 0;
    while (i < this.props.rating) {
      starsxx.push(<i key={i} className="fas fa-star" />);
      i++;
    }
    while (starsxx.length < 5) {
      starsxx.push(<i key={starsxx.length} className="far fa-star" />);
    }

    const reviewText = this.props.reviews.length > 1 ? "Reviews" : "Review";
    return (
      <div>
        <div className="review-show">
          {this.props.reviews.length}&nbsp;{reviewText}&nbsp;
          <span className="rating-star">{starsxx}</span>
        </div>
        <div className="detailed-reviews">{detailedReviews}</div>
      </div>
    );
  }
}

export default connect(
  null,
  mdp
)(SpotReviews);
