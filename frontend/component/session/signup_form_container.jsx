import {connect} from 'react-redux';
import SignForm from './signup_form'
import { signup, deleteSessionErrors} from '../../action/session_actions'

const msp = state => ({
    errors: state.errors.session,
    formType: 'Sign Up'
})

const mdp = dispatch => ({
    action: user => dispatch(signup(user)),
    deleteErrors: () => dispatch(deleteSessionErrors()),
})

export default connect(msp, mdp)(SignForm)

