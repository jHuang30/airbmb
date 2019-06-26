import { UPDATE_FILTER, CLEAR_FILTER } from "../action/filter_actions";

const defaultFilter = Object.freeze({
  bounds: {},
  filter: {}
});

const filterReducer = (state = defaultFilter, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      const newFilter = {
        [action.filter]: action.value
      };
      return Object.assign({}, state, newFilter);
    case CLEAR_FILTER:
      return defaultFilter;
    default:
      return state;
  }
};

export default filterReducer;
