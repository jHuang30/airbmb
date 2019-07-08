import React from "react";
import { closeModal } from "../../action/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import About from "../../component/about";
import Amenities from "../spot_show/amenities";
import ConfirmedBooking from "../bookings/confirmed_booking";
import Blocked from "../bookings/blocked";
import CreateReview from "../review/create_review_container";
import NoReview from "../review/no_review";
import UpdateReview from "../review/edit_review_container";

function Modal(props) {
  const { closeModal } = props;
  let review;
  let spotId;
  let bookingId;
  let amenities;
  let modal;
  if (props.modal && typeof props.modal === "object") {
    modal = props.modal.modal;
    if (props.modal.amenities) {
      amenities = props.modal.amenities;
    } else if (props.modal.review) {
      review = props.modal.review;
      spotId = props.modal.spotId;
    } else if (props.modal.bookingId) {
      bookingId = props.modal.bookingId;
    }
  } else {
    modal = props.modal;
  }
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "about":
      component = <About />;
      break;
    case "amenities":
      component = <Amenities amenities={amenities} />;
      break;
    case "confirmation":
      component = <ConfirmedBooking />;
      break;
    case "blocked":
      component = <Blocked />;
      break;
    case "review":
      component = <CreateReview bookingId={bookingId} />;
      break;
    case "updateReview":
      component = <UpdateReview review={review} spotId={spotId} />;
      break;
    case "cannotReview":
      component = <NoReview />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
