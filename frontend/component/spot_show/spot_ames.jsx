import React from "react";
import { openModal } from "../../action/modal_actions";
import { connect } from "react-redux";

const mdp = dispatch => {
  return {
    openModal: (modal, info) => dispatch(openModal(modal, info))
  };
};

class SpotAmes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { spot } = this.props;

    const amenitiesNums = [];

    if (spot.amenities) {
      Object.keys(spot.amenities).map(num => {
        amenitiesNums.push(parseInt(num));
      });
    }

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
    amenitiesNums.map((num, idx) => {
      allAmenities.push(
        <span className="each-ame" key={idx}>
          {symbol(spot.amenities[num].sym)} &nbsp; &nbsp;{" "}
          {spot.amenities[num].name}
        </span>
      );
    });
    return (
      <div className="spot-ame">
        Amenities:
        <div className="ame-container">
          <div className="ame2">
            {allAmenities[0]}
            {allAmenities[1]}
          </div>

          <div className="ame2">
            {allAmenities[2]}
            {allAmenities[3]}
          </div>
        </div>
        <button
          className="showall"
          onClick={() => dispatch(openModal("amenities", spot))}
        >
          Show all {allAmenities.length} amenities
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  mdp
)(SpotAmes);
