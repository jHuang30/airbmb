import React from 'react';
import SpotIndexItem from './spot_index_item';
import IndexNavbar from '../navbar/index_nav';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SpotMap from '../spot_map/spot_map'

class SpotIndex extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {mapStatus: true};
    }
    
    componentDidMount(){  
        this.props.fetchSpots();
    }


    handleClick(){
        this.setState({mapStatus: !this.state.mapStatus})
    }

    render(){   
        let spots = []
        let lo = []
        if (this.props.location){
           this.props.location.split(' ').forEach(word => {
                lo.push(word.charAt(0).toUpperCase() + word.slice(1));
            })
        }
        lo = lo.join(' ')
        if (this.props.location && this.props.bounds){
            this.props.spots.forEach(spot => {
                if (spot.location === lo) {
                    spots.push(spot)
                }
            })
        }else if (this.props.location) {
            this.props.spots.forEach( spot => {
                if(spot.location === lo){
                    spots.push(spot)
                }
            })
        }else if(this.props.bounds){
            spots = this.props.spots 
        }else{
            spots = this.props.spots
        }

        
        let allSpots = spots.map((spot,idx) => {
            return (
                    <SpotIndexItem key={idx} spot={spot} />
            )
        })
        return (
            <div>
                <IndexNavbar />
                <h1 className="explore">Explore the world</h1>  

                <div className={this.state.mapStatus ? 'list-map' : 'no-map'}>
                    <div className="allSpotContainer">
                        {allSpots}
                    </div>

                    <div className='index-map'>
                        <div className='switch-container'>
                            <input type="checkbox" id="switch" onClick={this.handleClick}/>
                            <label className='switch' htmlFor="switch"></label>
                        </div>
                        <SpotMap className='spot-map' spots={allSpots} updateFilter={this.props.updateFilter} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SpotIndex