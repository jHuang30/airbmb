import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {email:'', password:''},
        this.handleSubmit = this.handleSubmit.bind(this),
        this.handleDemo = this.handleDemo.bind(this),
        this.altForm = this.altForm.bind(this)
    }

    update(field){
        return(e) => {
            this.setState({[field]:e.target.value})
        }
    }

    handleDemo(e){
        e.preventDefault;
        const demo = { email: 'demouser@gmail.com', password: "aaaaaa" }
        this.props.action(demo).then(() => {
            this.props.closeModal();
            this.props.history.push('/spots');
        });
    }


    altForm() {
        this.props.openModal('signup')
    }


    handleSubmit(e){
        return (
        e.preventDefault,
        this.props.action(this.state).then(() => {
            this.props.closeModal();
            this.props.history.push('/spots');
        })
        )
    }

    componentDidMount(){
        this.props.deleteErrors();
    }

    renderErrors() {

        const errors = Object.values(this.props.errors).map(error => (
            <li>
                {error}
            </li>
        ));

        return (
            <ul>
                {errors}
            </ul>
        );
    }



    render(){
        const errors = this.renderErrors();
        const redErrors = this.props.errors ? Object.values(this.props.errors) : null;
        const redBorder = redErrors.length > 0 ? "red-border" : ""

        return(
            <div>
                
                <form className="modal-form">
                    

                    <p className="close-button" onClick={this.props.closeModal}>&times;</p>

                    <h1 className="welcome-message">
                        Please Log In to Continue
                    </h1>

                    <div className="form-errors">{errors}</div>
                    <br/>
                    <label>
                        <input type="text" 
                            className={`modal-form-input ${redBorder}`}
                               placeholder="Email Address"
                               value={this.state.email} 
                               onChange={this.update('email')}
                               />
                        <i id='far' className="far fa-envelope"></i>
                        {/* <p>{this.renderErrors("Email")}</p> */}
                    </label>

                    <br />

                    <label>
                        <input type="password" 
                            className={`modal-form-input ${redBorder}`}
                               placeholder="Password"
                               value={this.state.password} 
                               onChange={this.update('password')}/>
                        <i id='far' className="fas fa-lock"></i>
                        {/* <p>{this.renderErrors("Password")}</p> */}
                    </label>

                    <br />

                    <button type='button' className="modal-form-button" onClick={this.handleSubmit}>
                        Log in
                    </button>

                    <button type='button' className="login-demo" onClick={this.handleDemo}>
                        Log In as Demo User
                    </button>
                    <br/>
                    <p className='alter'>Don’t have an account?
                    <button className='alter-button' onClick={this.altForm}>Sign up</button></p>

                </form>
            </div>
        )

    }
}

export default withRouter(LoginForm);