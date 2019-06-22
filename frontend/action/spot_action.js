import * as SpotAPIUtil from '../util/spots_api_util';

export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

const receiveAllSpots = spots => {
    return{
    type: RECEIVE_ALL_SPOTS,
    spots
    }}

const receiveSpot = spot => {
    return {
    type: RECEIVE_SPOT,
    spot
}
}

export const fetchSpots = filters => dispatch => {
    return (
    SpotAPIUtil.fetchSpots(filters).then(spots => dispatch(receiveAllSpots(spots)))
    )
}

export const fetchSpot = (id) => dispatch => {
    return (
    SpotAPIUtil.fetchSpot(id).then(spot => dispatch(receiveSpot(spot)))
    )
}
