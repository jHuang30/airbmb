import { RECEIVE_CURRENT_USER } from "../action/session_actions";
import { RECEIVE_REVIEW_USER } from "../action/reveiw_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { [action.user.id]: action.user });
    case RECEIVE_REVIEW_USER:
      return Object.assign({}, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;
