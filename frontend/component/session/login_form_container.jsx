import { connect } from 'react-redux';
import loginForm from './login_form'
import { login } from '../../action/session_actions'

const msp = (state) => ({
    formType: 'Sign In',
    errors: state.errors.session,
});

const mdp = dispatch => ({
    action: user => dispatch(login(user))
})

export default connect(msp, mdp)(loginForm)