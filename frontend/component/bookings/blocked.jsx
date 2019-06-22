import React from 'react';
import { connect } from 'react-redux'
import { closeModal } from '../../action/modal_actions'

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

class Blocked extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.closeModal();
    }

    render() {
        return (
            <div className='blocked-modal'>
                <p>dates invalid, contain existing revervations, please select again</p>
                <button type='button' onClick={this.handleClick}>close</button>
            </div>
        )
    }
}


export default connect(null, mdp)(Blocked)
