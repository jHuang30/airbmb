import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "react-dates/initialize";
import { SingleDatePicker, DayPickerInput } from "react-dates";
import { updateFilter, clearFilter } from "../action/filter_actions";

const mdp = (dispatch) => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    clearFilter: () => dispatch(clearFilter()),
  };
};

class FrontForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      num_guests: null,
      location: null,
      focused1: false,
      focused2: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.num_guests !== null) {
      this.props
        .updateFilter("num_guests", this.state.num_guests)
        .then(this.props.history.push("/spots"));
    }

    if (this.state.location !== null) {
      this.props
        .updateFilter("location", this.state.location)
        .then(this.props.history.push("/spots"));
    }
    this.props.history.push("/spots");
  }

  componentWillMount() {
    this.props.clearFilter();
  }

  update(field) {
    return (e) => {
      debugger;
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div className="front-page-form">
        <div className="hearder-text">
          Book unique places to stay and things to do.
        </div>

        <div>
          <label className="where-guests">
            WHERE
            <input
              type="text"
              placeholder="Anywhere"
              onChange={this.update("location")}
            />
          </label>

          {/* <div className="checkin-out">
            <label>CHECK-IN</label>

            <label>CHECK-OUT</label>
          </div> */}

          <div className="checkin-out">
            <div className="checkin-out-column">
              <div className="checkin-out-label">CHECK-IN</div>
              <SingleDatePicker
                date={this.state.startDate} // momentPropTypes.momentObj or null
                onDateChange={(startDate) => this.setState({ startDate })} // PropTypes.func.isRequired
                focused={this.state.focused1} // PropTypes.bool
                onFocusChange={({ focused: focused1 }) =>
                  this.setState({ focused1 })
                } // PropTypes.func.isRequired
                id="sDate" // PropTypes.string.isRequired,
                numberOfMonths={1}
                placeholder={"mm/dd/yyyy"}
                readOnly={true}
              />
            </div>

            <div className="checkin-out-column">
              <div className="checkin-out-label">CHECK-OUT </div>
              <SingleDatePicker
                date={this.state.endDate} // momentPropTypes.momentObj or null
                onDateChange={(endDate) => this.setState({ endDate })} // PropTypes.func.isRequired
                focused={this.state.focused2} // PropTypes.bool
                onFocusChange={({ focused: focused2 }) =>
                  this.setState({ focused2 })
                } // PropTypes.func.isRequired
                id="eDate" // PropTypes.string.isRequired,
                numberOfMonths={1}
                placeholder={"mm/dd/yyyy"}
                readOnly={true}
              />
            </div>
          </div>

          <label className="where-guests">
            GUESTS
            <input
              type="number"
              min="1"
              placeholder="Guests"
              onChange={this.update("num_guests")}
            />
          </label>

          <button
            className="front-submit"
            type="button"
            onClick={this.handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, mdp)(FrontForm));
