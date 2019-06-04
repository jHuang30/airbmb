import { OPEN_MODAL, CLOSE_MODAL} from '../action/modal_actions';

const modalReducer = (state = null, action) => {
    debugger
    switch (action.type){
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default modalReducer