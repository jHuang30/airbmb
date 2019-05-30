import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../action/modal_actions';

const mdp = dispatch => {
    return {
    closeModal: () => dispatch(closeModal()),
    about: () => dispatch(openModal('about')),
    }
};


class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <form className="modal-form">
                <p className="close-button" onClick={this.props.closeModal}>X</p>
                    
                <a href="mailto:jacihuang30@gmai.com">
                    <button id="about-link" className="modal-form-button">Email</button>
                </a>

                <a href="https://github.com/jHuang30">
                    <button id="about-link" className="modal-form-button">GitHub</button>
                </a>

            </form>
        )
    }   
}




export default connect(null, mdp)(About);