import {connect} from 'react-redux';
import Navbar from './navbar';
import {logout} from '../../action/session_actions';
import {openModal} from '../../action/modal_actions';

const msp = ({entities:{users}, session}) => ({
    currentUser: users[session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(Navbar)

