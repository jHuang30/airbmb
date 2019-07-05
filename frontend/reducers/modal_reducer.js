import { OPEN_MODAL, CLOSE_MODAL } from "../action/modal_actions";

const modalReducer = (state = null, action) => {
  debugger;
  switch (action.type) {
    case OPEN_MODAL:
      if (action.amenities) {
        return { modal: action.modal, amenities: action.ames };
      } else if (action.review) {
        return {
          modal: action.modal,
          review: action.review,
          spotId: action.spotId
        };
      } else {
        return {
          modal: action.modal
        };
      }
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default modalReducer;
