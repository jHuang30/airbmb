import { connect } from "react-redux";
import loginForm from "./login_form";
import { login, deleteSessionErrors } from "../../action/session_actions";
import { openModal, closeModal } from "../../action/modal_actions";

const msp = state => {
  return {
    formType: "Sign In",
    errors: state.errors.session
  };
};

const mdp = dispatch => {
  return {
    action: user => dispatch(login(user)),
    deleteErrors: () => dispatch(deleteSessionErrors()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  msp,
  mdp
)(loginForm);
