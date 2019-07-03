import { connect } from "react-redux";
import SpotIndex from "./spot_index";
import { fetchSpots } from "../../action/spot_action";
import { updateFilter } from "../../action/filter_actions";
import { fetchReviews } from "../../action/reveiw_actions";

const msp = state => {
  return {
    spots: Object.values(state.entities.spots),
    bounds: state.ui.filter.bounds,
    location: state.ui.filter.location,
    filter: state.ui.filter
  };
};

const mdp = dispatch => {
  return {
    fetchSpots: filter => dispatch(fetchSpots(filter)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fetchReviews: () => dispatch(fetchReviews())
  };
};

export default connect(
  msp,
  mdp
)(SpotIndex);
