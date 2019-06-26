import { RECEIVE_ALL_SPOTS, RECEIVE_SPOT } from "../action/spot_action";

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SPOTS:
      // return Object.assign({}, state, action.spots)
      return action.spots;
    case RECEIVE_SPOT:
      return Object.assign({}, state, { [action.spot.id]: action.spot });
    default:
      return state;
  }
};

export default spotsReducer;
