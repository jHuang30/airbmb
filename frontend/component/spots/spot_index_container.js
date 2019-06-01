import { connect } from 'react-redux';
import SpotIndex from './spot_index';
import { fetchSpots } from '../../action/spot_action'

const msp = state => {
    return {
        spots: Object.values(state.entities.spots)
    }
}

const mdp = dispatch => {
    return {
    fetchSpots: () => dispatch(fetchSpots())
    }
}

export default connect(msp, mdp)(SpotIndex)