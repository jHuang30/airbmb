import React from "react";

class SpotInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
      const {spot} = this.props

      const bedrooms =
        spot.num_bedrooms + (spot.num_bedrooms > 1 ? " bedrooms" : " bedroom");
      const guests =
        spot.num_guests + (spot.num_guests > 1 ? " guests" : " guest");
      const beds = spot.num_beds + (spot.num_beds > 1 ? " beds" : " bed");
      const bathrooms =
        spot.num_bathrooms +
        (spot.num_bathrooms > 1 ? " bathrooms" : " bathroom");

        return (
            <div>
                <div className="spot-title">{spot.title}</div>

                <div className="spot-location">{spot.location}</div>

                <div className="spot-type">
                <i className="fas fa-house-damage" />
                {spot.spotType}
                </div>

                <div className="spot-info">
                <span>{guests}</span>
                <span>{bedrooms}</span>
                <span>{beds}</span>
                <span>{bathrooms}</span>
                </div>

                <div className="spot-des">
                <p>{spot.description}</p>
                </div>
            </div>
        )
    }
}

export default SpotInfo;