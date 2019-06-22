
export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};

    }

    updateMarkers(spots) {
        debugger
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

        
        spots.forEach(spot => {
            if (spots.length === 1){
                this.createMarkerFromSpot(spot)

            }else {
                this.createMarkerFromSpot(spot)
            }
        })
        debugger
        let existingMarkerIds = Object.keys(this.markers)
        let currentSpotsIds = Object.keys(spotsObj)
        debugger
        // const xx = existingMarkerIds.filter(spotId => { 
        //         debugger
        //         !spotsObj[parseInt(spotId)]
        //     })  
        const xx = []
        currentSpotsIds = currentSpotsIds.map( idString => parseInt(idString))
        existingMarkerIds = existingMarkerIds.map( idStirng => parseInt(idStirng))
        existingMarkerIds.forEach(id => {
            debugger
            if (!currentSpotsIds.includes(id)){
                xx.push(id)
            }
        })
            debugger
            xx.forEach(spotId => {
                debugger
                this.removeMarker(this.markers[spotId])
            })
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
        debugger
        this.markers[marker.spotId].setMap(null);
        delete this.markers[marker.spotId];
    }
}