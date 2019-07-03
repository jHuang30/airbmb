import React from "react";
import SpotIndexItem from "./spot_index_item";
import IndexNavbar from "../navbar/index_nav";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import SpotMap from "../spot_map/spot_map";


class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { mapStatus: true };
  }

  componentDidMount() {
    debugger
    this.props.fetchSpots();
    this.props.fetchReviews();
  }

  handleClick() {
    this.setState({ mapStatus: !this.state.mapStatus });
  }

  render() {
    let spots = this.props.spots;
    let location = [];
    if (this.props.location) {
      this.props.location.split(" ").forEach(word => {
        location.push(word.charAt(0).toUpperCase() + word.slice(1));
      });
      location = location.join(" ");

      spots = spots.filter(spot => {
        return spot.location === location;
      });
    }

    if (this.props.bounds.northEast) {
      const { northEast, southWest } = this.props.bounds;
      spots = spots.filter(spot => {
        return (
          spot.lat <= northEast.lat &&
          spot.lat >= southWest.lat &&
          spot.long <= northEast.lng &&
          spot.long >= southWest.lng
        );
      });
    }
    let allSpots = null;

    if (this.props.filter.num_guests === undefined) {
      allSpots = spots.map((spot, idx) => {
        return <SpotIndexItem key={idx} spot={spot} />;
      });
    } else {
      allSpots = spots.map((spot, idx) => {
        if (this.props.filter.num_guests <= spot.num_guests) {
          return <SpotIndexItem key={idx} spot={spot} />;
        } else {
          return null;
        }
      });
    }
    return (
      <div>
        <IndexNavbar />
        <h1 className="explore">Explore the world</h1>

        <div className={this.state.mapStatus ? "list-map" : "no-map"}>
          <div className="allSpotContainer">{allSpots}</div>

          <div className="index-map">
            <div className="switch-container">
              <input type="checkbox" id="switch" onClick={this.handleClick} />
              <label className="switch" htmlFor="switch" />
            </div>
            <SpotMap
              className="spot-map"
              spots={allSpots}
              updateFilter={this.props.updateFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SpotIndex;
