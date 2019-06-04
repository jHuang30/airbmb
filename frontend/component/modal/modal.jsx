import React from 'react';
import { closeModal } from '../../action/modal_actions'
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import About from '../../component/about';
import Amenities from '../spot_show/amenities';

function Modal({modal, closeModal}){
    if (!modal){
        return null;
    }
    debugger
    let component;
    switch(modal) {
        case 'login' :
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'about':
            component = <About />;
            break;
        case 'amenities':
            component = <Amenities />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
     );
    }

    const mapStateToProps = state => {
        return {
            modal: state.ui.modal
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            closeModal: () => dispatch(closeModal())
        };
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Modal);