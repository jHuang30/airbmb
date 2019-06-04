import { OPEN_MODAL, CLOSE_MODAL} from '../action/modal_actions';

const modalReducer = (state = null, action) => {
    switch (action.type){
        case OPEN_MODAL:
            return {modal:action.modal, amenities:action.ames};
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default modalReducer