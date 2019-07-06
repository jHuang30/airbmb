export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, props = {}) => {
  if (props.amenities) {
    const ames = props.amenities;
    return {
      type: OPEN_MODAL,
      modal,
      ames
    };
  } else if (props.info) {
    const review = props.info.review;
    const spotId = props.info.spotId;
    return {
      type: OPEN_MODAL,
      modal,
      review,
      spotId
    };
  } else {
    return {
      type: OPEN_MODAL,
      modal
    };
  }
};

export const closeModal = () => ({
  type: CLOSE_MODAL
});
