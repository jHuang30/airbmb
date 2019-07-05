import React from "react";
import { connect } from "react-redux";
import { createBooking } from "../../action/booking_action";
import { fetchSpot } from "../../action/spot_action";
import IndexNavbar from "../navbar/index_nav";
import moment from "moment";
import "react-dates/initialize";
import { openModal, closeModal } from "../../action/modal_actions";

const msp = (state, ownProps) => {
  const spotId = parseInt(ownProps.match.params.spotId);
  const bookingInfo = state.ui.createBooking;

  const spot = state.entities.spots[spotId];
  return {
    spot,
    bookingInfo
  };
};

const mdp = dispatch => {
  return {
    // updateBooking: booking => dispatch(updateBooking(booking)),
    // deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    fetchSpot: id => dispatch(fetchSpot(id)),
    createBooking: (booking, spotId) =>
      dispatch(createBooking(booking, spotId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.calculateDays = this.calculateDays.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  calculateDays(start, end) {
    if ((start, end)) {
      return Math.floor(end.diff(start) / 86400000);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props
      .createBooking(this.props.bookingInfo, this.props.spot.id)
      .then(success => {
        this.props.openModal("confirmation");
      });
  }

  componentDidMount() {
    const spotId = parseInt(this.props.match.params.spotId);
    // const bookingId = parseInt(this.props.match.params.bookingId);
    // this.props.fetchBooking(bookingId);

    this.props.fetchSpot(spotId);
  }

  render() {
    if (!this.props.spot) {
      return null;
    }

    const booking = this.props.bookingInfo;
    const { spot } = this.props;
    const guestText = booking.num_guests > 1 ? "guests" : "guest";
    const startD = moment(booking.start_date);
    const endD = moment(booking.end_date);
    const nights = this.calculateDays(startD, endD);
    const text_night = nights > 1 ? "nights" : "night";
    const price = spot.price;
    const roomFee = nights * price;
    const serviceFee = 16 * nights;
    const otherFee = 17 * nights;
    const totalFee = roomFee + serviceFee + otherFee;

    const rating = booking.rating;
    const stars = [];
    let i = 0;
    while (i < rating) {
      stars.push(<i key={i} className="fas fa-star" />);
      i++;
    }

    while (stars.length < 5) {
      stars.push(<i key={stars.length} className="far fa-star" />);
    }

    return (
      <div>
        <IndexNavbar />

        <div className="whole-container">
          <div className="left-container">
            <div className="review-text">Review your booking!</div>

            <div className="rare-find">
              <span>
                <img
                  src="https://a0.muscache.com/airbnb/static/packages/icon-uc-diamond.296a9c25.gif"
                  alt=""
                />
              </span>
              <span>YAY! This is a rare find.</span>
            </div>

            <div className="keep-in-mind">Things to keep in mind</div>

            <div className="some-rules">
              <div className="icon-text">
                <div className="rule-pic">
                  <i className="fas fa-child" />
                </div>
                <div className="rule-text">
                  Suitable for children (2-12 years)
                </div>
              </div>

              <div className="icon-text">
                <div className="rule-pic">
                  <i className="fas fa-baby-carriage" />
                </div>
                <div className="rule-text">
                  Suitable for infants (under 2 years)
                </div>
              </div>

              <div className="icon-text">
                <div className="rule-pic">
                  <i className="fas fa-paw" />
                </div>
                <div className="rule-text">Pet friendly</div>
              </div>

              <div className="icon-text">
                <div className="rule-pic">
                  <i className="fas fa-glass-cheers" />
                </div>
                <div className="rule-text">No parties or events</div>
              </div>

              <div className="icon-text">
                <div className="rule-pic">
                  <i className="fas fa-smoking-ban" />
                </div>
                <div className="rule-text">No smoking</div>
              </div>
            </div>

            <button
              type="button"
              className="confirm-button"
              onClick={this.handleSubmit}
            >
              Looks good, let's go!
            </button>
          </div>

          <div className="right-container">
            <div className="item-inside">
              <div className="final item-inside-pic">
                <div className="final-desc">
                  {spot.title}
                  <p className="rating-star">{stars}</p>
                </div>
                <div className="pic-holder">
                  <img src={spot.photoUrls[0]} />
                </div>
              </div>

              <div className="final final-date">
                <div className="holder date-holder">
                  <div>
                    <i className="fas fa-user-friends" /> {booking.num_guests}
                    &nbsp;{guestText}
                  </div>
                  <div>
                    <i className="far fa-calendar-alt" />
                    {booking.start_date}
                    <i id="arrow" className="fas fa-arrow-right" />
                    {booking.end_date}
                  </div>
                </div>
              </div>

              <div className="final final-fee-detail">
                <div className="final-fee-con">
                  <div className="final-fee">
                    <div>
                      ${price} x {nights} {text_night}
                    </div>
                    <div>${roomFee}</div>
                  </div>

                  <div className="final-fee">
                    <div>Service fees</div>
                    <div>${serviceFee}</div>
                  </div>

                  <div className="final-fee">
                    <div>Occupancy taxes and fees</div>
                    <div>${otherFee}</div>
                  </div>
                </div>
              </div>

              <div className="final final-fee-total">
                <div className="final-fee ">
                  <div>Total(USD)</div>
                  <div>${totalFee}</div>
                </div>
              </div>

              <div className="final-info">
                <div>Free cancellation!</div>
                <div>
                  <i className="fas fa-shield-alt" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(Confirmation);
