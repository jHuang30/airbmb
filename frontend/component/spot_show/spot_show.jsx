import React from "react";
import SpotDetail from "./spot_detail";

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.spotId)
    this.props.fetchSpots();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.spotId != this.props.spotId) {
      this.props.fetchSpot(this.props.spotId);
    }
  }

  render() {
    const { spot } = this.props;
    if (!spot) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <SpotDetail spot={spot} />
      </div>
    );
  }
}

export default SpotShow;
