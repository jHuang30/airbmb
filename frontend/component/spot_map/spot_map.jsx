import React from "react";
import MarkerManager from "../../util/marker_manager";
import { connect } from "react-redux";
// import { fetchSpots } from "../../action/spot_action";
import { updateFilter } from "../../action/filter_actions";

const msp = state => {
  return {
    spots: Object.values(state.entities.spots),
    filter: state.ui.filter
  };
};

const mdp = dispatch => ({
  // fetchSpots: () => dispatch(fetchSpots()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

class SpotMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { spot } = this.props;
    let mapOptions;

    if (spot) {
      mapOptions = {
        center: { lat: spot.lat, lng: spot.long },
        zoom: 13
      };
    } else {
      mapOptions = {
        center: { lat: 37.0902, lng: -95.7129 },
        zoom: 3
      };
    }
    const mapNode = document.getElementById("map-container");

    this.map = new google.maps.Map(mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.registerListeners();

    if (spot) {
      this.MarkerManager.updateMarkers([spot]);
    } else {
      this.MarkerManager.updateMarkers(this.props.spots);
    }
  }

  componentDidUpdate(prevProps) {
    debugger;
    if (this.props.spot) {
      if (prevProps.spot.id !== this.props.spot.id) {
        this.MarkerManager.updateMarkers([this.props.spot]);
        this.map.setZoom(5);
      }
    } else {
      let allSpots = this.props.spots;
      let filterLocation = [];
      if (this.props.filter.location) {
        this.props.filter.location.split(" ").forEach(word => {
          filterLocation.push(word.charAt(0).toUpperCase() + word.slice(1));
        });
        filterLocation = filterLocation.join(" ");
        allSpots = allSpots.filter(spot => {
          return spot.location === filterLocation;
        });
      }
      if (this.props.filter.num_guests) {
        allSpots = allSpots.filter(spot => {
          return spot.num_guests >= this.props.filter.num_guests;
        });
      }
      debugger;
      if (
        this.props.filter.location &&
        this.props.filter.location !== prevProps.filter.location
      ) {
        const lat = allSpots[0].lat;
        const long = allSpots[0].long;
        this.map.setCenter({ lat: lat, lng: long });
        this.map.setZoom(5);
      }
      this.MarkerManager.updateMarkers(allSpots);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter("bounds", bounds);
    });
  }

  render() {
    return <div id="map-container" ref={map => (this.mapNode = map)} />;
  }
}

export default connect(
  msp,
  mdp
)(SpotMap);
