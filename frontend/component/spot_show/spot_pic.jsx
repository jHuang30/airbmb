import React from "react";

class SpotPic extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {spot} = this.props
        return (
            <div className="spot-detail">
          <div className="row">
            <div className="columna">
              <img src={spot.photoUrls[0]} />
            </div>

            <div className="columnb">
              <div className="column1">
                <img src={spot.photoUrls[1]} />
              </div>

              <div className="column1">
                <img src={spot.photoUrls[2]} />
              </div>
            </div>

            <div className="columnb">
              <div className="column1">
                <img src={spot.photoUrls[3]} />
              </div>

              <div className="column1">
                <img src={spot.photoUrls[4]} />
              </div>
            </div>
          </div>
        </div>

        )
    }
}

export default SpotPic