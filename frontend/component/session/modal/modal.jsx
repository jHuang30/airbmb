import React from 'react';
import { closeModal } from '../../../action/modal_actions'
import { connect } from 'react-redux';
import LoginFormContainer from '../login_form_container';
import SignupFormContainer from '../signup_form_container';

function Modal({modal, closeModal}){
    if (!modal){
        return null;
    }

    let component;
    switch(modal) {
        case 'login' :
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }

    return (
        
    )
}