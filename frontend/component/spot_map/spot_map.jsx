import React from 'react';
import MarkerManager from '../../util/marker_manager'
import { connect } from 'react-redux';
import { fetchSpots } from '../../action/spot_action'


const msp = (state) => {
    return {
        spots: Object.values(state.entities.spots)
    }
}

const mdp = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots()),
})

class SpotMap extends React.Component {
    constructor(props){
        super(props); 
    }

    
    componentDidMount() {
        let {spot} = this.props;
        let mapOptions;

        if (spot){
            mapOptions = {
                center: { lat: spot.lat, lng: spot.long },
                zoom: 13,
            }
        }else{ 
            mapOptions = {
                center: { lat: 37.0902, lng: -95.7129},
                zoom: 3
            }
        }
        const mapNode = document.getElementById('map-container');

        this.map = new google.maps.Map(mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.registerListeners();

        if(spot){
            this.MarkerManager.updateMarkers([spot]);
        }else{
            this.props.fetchSpots().then(payload => {
                const spots = Object.values(payload.spots)
                this.MarkerManager.updateMarkers(spots)
            })
        }
    }  

    componentDidUpdate(prevProps){
        if(this.props.spot){
            this.MarkerManager.updateMarkers([this.props.spot]);
            this.map.setZoom(5);
        }else{
            if (this.props.spots.length !== 0){
                
                this.MarkerManager.updateMarkers(this.props.spots);

                const myLat = this.props.spots[0].lat;
                const myLong = this.props.spots[0].long;
                if (prevProps.spots.length !== 0 && (prevProps.spots[0].lat !== myLat || prevProps.spots[0].long !== myLong)){
                    this.map.setCenter({lat:myLat, lng:myLong})
                    this.map.setZoom(5)
                }
            }
        }
    }



    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds);
            
        });
    }

    render(){
        return(
            <div id='map-container' ref={map => this.mapNode = map}></div>
        )
    }
}

export default connect(msp,mdp)(SpotMap)