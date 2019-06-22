import React from 'react';
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom'
import { closeModal } from '../../action/modal_actions'


const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

class ConfrimedBooking extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(e){
        e.preventDefault();
        this.props.closeModal();
        this.props.history.push('/spots')
    }
    render(){
    return(
        <div className='confirmed-modal'>
            <i className="far fa-thumbs-up"></i>
            <p>Booking confirmed!</p> 
            <button type='button' onClick={this.handleClick}>Looking for more awesome places?</button>
        </div>
    )
  }

}
export default withRouter(connect(null, mdp)(ConfrimedBooking))