import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../action/session_actions";
import { openModal } from "../../action/modal_actions";
import { updateFilter } from "../../action/filter_actions";
import { withRouter } from "react-router-dom";

const msp = ({ entities: { users }, session }) => ({
  currentUser: users[session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

class IndexNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { location: null };
    // this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertAddress = this.convertAddress.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  handleSubmit(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props
        .updateFilter("location", e.target.value)
        .then(this.props.history.push("/spots"));
    }
  }

  convertAddress(address) {
    let geometry;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: address }, (result, status) => {
      geometry = result[0].geometry;
      const lat = geometry.location.lat();
      const long = geometry.location.lng();
      const newBounds = { lat, long };
      this.props.updateFilter("bounds", newBounds);
    });
  }

  render() {
    const display = this.props.currentUser ? (
      <div className="idx-navbar">
        <button
          className="idx-navbut"
          onClick={() => this.props.openModal("about")}
        >
          Contact Info
        </button>
        <button
          className="idx-navbut"
          onClick={() => this.props.history.push("/myAccount")}
        >
          My Account
        </button>
        <button className="idx-navbut" onClick={() => this.props.logout()}>
          {" "}
          Log Out
        </button>
      </div>
    ) : (
      <div className="idx-navbar">
        <button
          className="idx-navbut"
          onClick={() => this.props.openModal("login")}
        >
          Login
        </button>
        <button
          className="idx-navbut"
          onClick={() => this.props.openModal("signup")}
        >
          Signup
        </button>
      </div>
    );
    return (
      <div className="idxnav-container">
        <div className="search">
          <h1 className="idxLogo">
            <Link to="/">Airbmb</Link>
          </h1>
          <form>
            <i className="fas fa-search" />
            <input
              type="text"
              placeholder="Try New York"
              onKeyPress={this.handleSubmit}
            />
          </form>
        </div>

        {display}
      </div>
    );
  }
}

export default withRouter(
  connect(
    msp,
    mdp
  )(IndexNavbar)
);
