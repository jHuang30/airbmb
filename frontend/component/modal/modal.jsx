import React from 'react';
import { closeModal } from '../../action/modal_actions'
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import About from '../../component/about';
import Amenities from '../spot_show/amenities';

function Modal(props){
    const { closeModal} = props;
    let amenities;
    let modal;
    if (props.modal && typeof props.modal === 'object'){
       modal = props.modal.modal;
       amenities = props.modal.amenities;
    }else{
        modal = props.modal
    }
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
        case 'about':
            component = <About />;
            break;
        case 'amenities':
            component = <Amenities amenities={amenities}/>;
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