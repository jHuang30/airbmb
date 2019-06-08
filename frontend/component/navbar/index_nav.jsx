import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../action/session_actions';
import { openModal } from '../../action/modal_actions';

const msp = ({ entities: { users }, session }) => ({
    currentUser: users[session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

class IndexNavbar extends React.Component {
    constructor(props){
        super(props),
        this.handleLogout = this.handleLogout.bind(this)

    }

    
    handleLogout(){
        debugger
        this.props.logout()
    }



        render(){

            const display = this.props.currentUser ? (
                <div className='idx-navbar'>
                    <button className="idx-navbut" onClick={() => this.props.logout()}> Log Out</button>
                </div>
            ) : (
                    <div className="idx-navbar">

                        <button className="idx-navbut" onClick={() => this.props.openModal('login')}>Login</button>
                        <button className="idx-navbut" onClick={() => this.props.openModal('signup')}>Signup</button>
                    </div>
                );

        return (

            <div className="idxnav-container">
                <div className='search'>
                    <h1 className="idxLogo"><Link to="/">Airbmb</Link></h1>
                    <form>
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder='Try Manhattan'/>
                    </form>
                </div>
                {display}
            </div>

        );
    };
}

export default connect(msp,mdp)(IndexNavbar)