import { combineReducers } from 'redux';
import entitiesReducer from '../reducers/entities_reducer';
import errorsReducer from '../reducers/errors.reducer';
import sessionReducer from '../reducers/session_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
})

export default rootReducer;