import { connect } from "react-redux";
import { fetchSpot, fetchSpots } from "../../action/spot_action";
import SpotShow from "./spot_show";
import { selectSpot } from "../../reducers/selectors";
// import { fetchBookings } from "../../action/booking_action";

const msp = (state, ownProps) => {
  const spotId = parseInt(ownProps.match.params.spotId);
  const spot = selectSpot(state.entities, spotId);
  return {
    spotId,
    spot
  };
};

const mdp = dispatch => {
  return {
    fetchSpot: id => dispatch(fetchSpot(id)),
    fetchSpots: () => dispatch(fetchSpots())
  };
};

export default connect(
  msp,
  mdp
)(SpotShow);
