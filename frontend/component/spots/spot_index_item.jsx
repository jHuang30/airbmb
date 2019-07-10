import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const msp = state => {
  return {
    reviews: Object.values(state.entities.reviews)
  };
};

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { spot } = this.props;
    const reviewIds = spot.review_ids;
    let allRatings = 0;
    const matchReviews = this.props.reviews.filter(review => {
      return reviewIds.includes(review.id);
    });
    matchReviews.forEach(review => {
      allRatings +=
        review.accuracy +
        review.checkin +
        review.cleanliness +
        review.communication +
        review.location +
        review.value;
    });

    const average_rating = Math.round(allRatings / (reviewIds.length * 6));

    const stars = [];
    let i = 0;
    while (i < average_rating) {
      stars.push(<i key={i} className="fas fa-star" />);
      i++;
    }

    while (stars.length < 5) {
      stars.push(<i key={stars.length} className="far fa-star" />);
    }
    const beds =
      spot.num_beds + (spot.num_beds > 1 ? " beds" : " bed").toUpperCase();
    const type = spot.spotType.toUpperCase();

    return (
      <div>
        <div className="singeSpotContainer">
          <Link className="no-underline" to={`/spots/${spot.id}`}>
            <div className="spot-image">
              <img src={spot.photoUrls[0]} />
            </div>
            <h1 className="spot-type">
              {type} · {beds}
            </h1>
            <h1 className="spot-title">{spot.title}</h1>
            <h1 className="spot-price"> $ {spot.price} per night</h1>
            <p className="rating-star">{stars}</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  msp,
  null
)(SpotIndexItem);
