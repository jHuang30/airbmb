import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../action/modal_actions";

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    about: () => dispatch(openModal("about"))
  };
};

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="about-form">
        <p className="close-button" onClick={this.props.closeModal}>
          &times;
        </p>

        <a href="mailto:jacihuang30@gmai.com">Email</a>
        <a href="https://github.com/jHuang30">GitHub</a>
        <a href="https://www.linkedin.com/in/jieying-huang/">LinkedIn</a>
      </form>
    );
  }
}

export default connect(
  null,
  mdp
)(About);
