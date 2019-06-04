import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../action/modal_actions'

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        amenities: () => dispatch(openModal('amenities')),
    }
};

class Amenities extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p>something</p>
        )
    }
}




export default connect(null, mdp)(Amenities);