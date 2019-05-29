import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER
} from '../action/session_actions';

const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            Object.assign({}, { session: action.errors })
        case RECEIVE_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default sessionErrorsReducer;