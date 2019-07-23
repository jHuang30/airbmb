import { connect } from "react-redux";
import SignForm from "./signup_form";
import { signup, deleteSessionErrors } from "../../action/session_actions";
import { openModal, closeModal } from "../../action/modal_actions";

const msp = state => ({
  errors: state.errors.session,
  formType: "Sign Up"
});

const mdp = dispatch => {
  return {
    action: user => dispatch(signup(user)),
    deleteErrors: () => dispatch(deleteSessionErrors()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  msp,
  mdp
)(SignForm);
