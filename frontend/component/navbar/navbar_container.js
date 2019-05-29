import {connect} from 'react-redux';
import Navbar from './navbar';
import {logout} from '../../action/session_actions';

const msp = ({entities:{users}, session}) => ({
    currentUser: users[session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Navbar)

