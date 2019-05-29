import { connect } from 'react-redux';
import loginForm from './login_form'
import { login, deleteSessionErrors } from '../../action/session_actions'

const msp = (state) => ({
    formType: 'Sign In',
    errors: state.errors.session,
}); 

const mdp = dispatch => ({
    action: user => dispatch(login(user)),
    deleteErrors: () => dispatch(deleteSessionErrors())  
})

export default connect(msp, mdp)(loginForm)