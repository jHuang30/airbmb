import { connect } from 'react-redux';
import { updateFilter } from '../../action/filter_actions'

const msp = state => ({
    spots: state.entities.spots
})

const mdp = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
    
})

export default connect(msp, mdp)(Search)