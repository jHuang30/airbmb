import React from "react";
import "react-dates/initialize";
import { DateRangePicker, isSameDay } from "react-dates";
import moment from "moment";
import { withRouter } from "react-router-dom";
import Dropdown from "./dropdown";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateDays = this.calculateDays.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.isBlocked = this.isBlocked.bind(this);
    this.isInvalid = this.isInvalid.bind(this);
  }

  handleSubmit(e) {
    const start = moment(this.state.startDate).format("L");
    const end = moment(this.state.endDate).format("L");

    e.preventDefault();
    if (this.isInvalid(start, end, this.props.blockedDates)) {
      this.props.openModal("blocked");
    } else if (this.props.user) {
      if (this.state.startDate && this.state.endDate) {
        this.props.storeBooking({
          start_date: start,
          end_date: end,
          num_guests: this.state.numGuest,
          rating: this.props.rating
        });
        this.props.history.push(
          `${this.props.history.location.pathname}/confirmation`
        );
      }
    } else {
      this.props.openModal("login");
    }
  }

  isInvalid(start, end, dates) {
    if (start && end) {
      start = moment(start);
      end = moment(end);
      while (start <= end) {
        for (let i = 0; i < dates.length; i++) {
          if (dates[i]._i === start.format("YYYY-MM-DD")) {
            return true;
          }
        }
        start = start.add(1, "days");
      }
    }
    return false;
  }

  isBlocked(day1) {
    return this.props.blockedDates.some(day2 => {
      return isSameDay(day1, day2);
    });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  calculateDays(start, end) {
    if ((start, end)) {
      return Math.round(end.diff(start) / 86400000);
    }
  }

  handleClear() {
    this.setState({ startDate: null, endDate: null });
  }

  render() {
    const formClass =
      this.state.startDate && this.state.endDate
        ? "longer-form"
        : "shorter-form";

    const nights =
      this.state.startDate && this.state.endDate
        ? this.calculateDays(this.state.startDate, this.state.endDate)
        : null;
    const text_night = nights > 1 ? "nights" : "night";
    const price = this.props.spot.price;
    const roomFee = nights * price;
    const serviceFee = 16 * nights;
    const otherFee = 17 * nights;
    const totalFee = roomFee + serviceFee + otherFee;

    const displayFees =
      this.state.startDate && this.state.endDate ? (
        <div className="fees">
          <div className="fee">
            <div>
              ${price} x {nights} {text_night}
            </div>
            <div>${roomFee}</div>
          </div>

          <div className="fee">
            <div>Service fees</div>
            <div>${serviceFee}</div>
          </div>

          <div className="fee">
            <div>Occupancy taxes and fees</div>
            <div>${otherFee}</div>
          </div>

          <div className="fee no-under-border">
            <div>Total</div>
            <div>${totalFee}</div>
          </div>
          <button className="clear-date" onClick={this.handleClear}>
            Clear Date
          </button>
        </div>
      ) : null;

    const stars = [];
    let i = 0;
    while (i < this.props.rating) {
      stars.push(<i key={i} className="fas fa-star" />);
      i++;
    }
    while (stars.length < 5) {
      stars.push(<i key={stars.length} className="far fa-star" />);
    }

    const options = [];

    if (this.props.spot.num_guests) {
      const maxGuests = this.props.spot.num_guests;

      for (let i = 0; i < maxGuests; i++) {
        options.push(
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        );
      }
    }
    return (
      <div className={formClass}>
        <div className="order-form-price">
          <span className="form-price">$ {this.props.spot.price} </span>
          <span className="per-night">per night</span>
          <p className="rating-star">{stars}</p>
        </div>

        <div className="form-date">Dates</div>

        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="your_unique_start_date_id"
          endDate={this.state.endDate}
          endDateId="your_unique_end_date_id"
          startDatePlaceholderText="Check In"
          endDatePlaceholderText="Check Out"
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          }
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          numberOfMonths={1}
          isDayBlocked={this.isBlocked}
          isOutsideRange={() => false}
        />

        <div className="form-date">Guest</div>

        <form className="guest-num">
          <select onChange={this.update("numGuest")}>{options}</select>
          {/* <Dropdown /> */}
        </form>

        {displayFees}

        <button
          type="button"
          className="form-button"
          onClick={this.handleSubmit}
        >
          Book
        </button>
        <p className="per-night won-charge">You won’t be charged yet</p>
      </div>
    );
  }
}

export default withRouter(BookingForm);
