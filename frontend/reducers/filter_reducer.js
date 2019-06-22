import { UPDATE_FILTER }  from '../action/filter_actions';


const defaultFilter = Object.freeze({
    bounds: {},
    filter: {},
})

const filterReducer = (state = defaultFilter, action) => {
    Object.freeze(state);
    switch(action.type){
        case UPDATE_FILTER:
            const newFilter = {
                [action.filter]: action.value
            };
            return Object.assign({}, state, newFilter);
        default:
            return state;
    }
}

export default filterReducer    ;