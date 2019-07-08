import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../action/modal_actions";

const msp = state => {
  return {
    ames: state.ui.modal.amenities
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    amenities: () => dispatch(openModal("amenities"))
  };
};

class Amenities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const symbol = sym => {
      switch (sym) {
        case "kitchen":
          return <i className="fas fa-utensils" />;
        case "wifi":
          return <i className="fas fa-wifi" />;
        case "elevator":
          return <i className="fas fa-dungeon" />;
        case "cable_tv":
          return <i className="fas fa-tv" />;
        case "iron":
          return <i className="fas fa-location-arrow" />;
        case "washer":
          return <i className="fas fa-dumpster" />;
        case "shampoo":
          return <i className="fas fa-wine-bottle" />;
        default:
          return null;
      }
    };

    const allAmenities = [];
    if (this.props.ames) {
      Object.values(this.props.ames).map((ame, idx) => {
        allAmenities.push(
          <span className="show-ame" key={idx}>
            {symbol(ame.sym)} &nbsp; {ame.name}
            <br />
            <br />
            <p className="description">
              Some descriptions will fit in here later.
            </p>
          </span>
        );
      });
    }
    return (
      <div>
        <p className="close-button" onClick={this.props.closeModal}>
          &times;
        </p>
        <div className="whole-ame-con">
          <div className="show-ame-container">{allAmenities}</div>
        </div>
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(Amenities);
