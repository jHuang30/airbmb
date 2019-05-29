import { combineReducers } from 'redux';
import sessionErrorsReducer from '../reducers/session_errors_reduer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer
})

export default errorsReducer;
