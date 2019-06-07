import { connect } from 'react-redux';
import { fetchSpot } from '../../action/spot_action';
import SpotShow from './spot_show';
import { selectSpot } from '../../reducers/selectors'

const msp = (state, ownProps) => {
    const spotId = parseInt(ownProps.match.params.spotId);
    const spot = selectSpot(state.entities, spotId)
    return {
        spotId,
        spot
    }
}

const mdp = dispatch => {
   return {
       fetchSpot: (id) => dispatch(fetchSpot(id))
    }
}

export default connect(msp, mdp)(SpotShow)
