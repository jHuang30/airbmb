
export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};
        this.removeMarker = this.removeMarker.bind(this);

    }

    updateMarkers(spots) {
        const spotsObj = {};
        if(spots.length === 1){
            spots.forEach(spot => {
                spotsObj[spot.id] = spot
            })
        }else{
            spots.forEach(spot => {
                spotsObj[spot.id] = spot
            });
        }
        
        spots.filter(spot => !this.markers[spot.id]).forEach(newSpot => this.createMarkerFromSpot(newSpot));
        Object.keys(this.markers).filter(spotId => !spotsObj[spotId]).forEach(spotId => this.removeMarker(this.markers[spotId]))
    }

    createMarkerFromSpot(spot) {
        const lat = spot.lat;
        const long = spot.long
        const position = new google.maps.LatLng(lat, long);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            spotId: spot.id,
        })
        this.markers[spot.id] = marker;  
        marker.addListener('click', () => {
            console.log('hi');
            
        });

    }

    removeMarker(marker) {
        this.markers[marker.spotId].setMap(null);
        delete this.markers[marker.spotId];
    }
}