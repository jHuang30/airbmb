import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../action/session_actions';
import { openModal } from '../../action/modal_actions';


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
        this.props.logout().then(() =>{
            this.props.history.push('/');
        })
    }



        render(){

        return (

            <div className="idxnav-container">
                <div className='search'>
                    <h1 className="idxLogo"><Link to="/">Airbmb</Link></h1>
                    <form>
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder='Try Manhattan'/>
                    </form>
                </div>
                <button className="logout-button" onClick={this.handleLogout}> Log Out</button>
            </div>

        );
    };
}

export default connect(null,mdp)(IndexNavbar)