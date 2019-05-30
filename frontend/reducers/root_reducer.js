import { combineReducers } from 'redux';
import entitiesReducer from '../reducers/entities_reducer';
import errorsReducer from '../reducers/errors.reducer';
import sessionReducer from '../reducers/session_reducer';
import uiReducer from '../reducers/ui_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
    ui: uiReducer,
})

export default rootReducer;