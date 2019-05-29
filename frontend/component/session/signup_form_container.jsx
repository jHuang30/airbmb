import {connect} from 'react-redux';
import SignForm from './signup_form'
import {signup} from '../../action/session_actions'

const msp = state => ({
    errors: state.errors.session,
    formType: 'Sign Up'
})

const mdp = dispatch => ({
    action: user => dispatch(signup(user))
})

export default connect(msp, mdp)(SignForm)

