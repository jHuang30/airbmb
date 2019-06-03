import React from 'react';
import SpotIndexItem from './spot_index_item';
import IndexNavbar from '../navbar/index_nav';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

class SpotIndex extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchSpots();
    }

    render(){   
        let { spots } = this.props;
        // spots = [{type: 'office', address: 'dkfjslfd', id: 1}]
        let allSpots = spots.map((spot,idx) => {
        
            return (
                    <SpotIndexItem key={idx} spot={spot} />
            )
        })
        return (
            <div>
                <IndexNavbar />
                <h1 className="explore">Explore the world</h1>  
                <div className="allSpotContainer">
                    {allSpots}
                </div>
            </div>
        )
    }
}

export default SpotIndex