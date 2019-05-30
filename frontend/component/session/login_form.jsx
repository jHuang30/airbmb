import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {email:'', password:''},
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemo = this.handleDemo.bind(this)
    }

    update(field){
        return(e) => {
            this.setState({[field]:e.target.value})
        }
    }

    handleDemo(e){
        e.preventDefault;
        const demo = { email: 'demoUser@gmail.com', password: "aaaaaa" }
        this.props.action(demo).then(this.props.closeModal)
    }



    handleSubmit(e){
        e.preventDefault;
        this.props.action(this.state).then(this.props.closeModal)
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

        return(
            <div>
                
                <form className="modal-form">
                    

                    <p className="close-button" onClick={this.props.closeModal}>X</p>

                    <h1 className="welcome-message">
                        Please Log In to Continue
                    </h1>

                    {errors}
                    <br/>
                    <label>
                        <input type="text" 
                               placeholder="Email Address"
                               value={this.state.email} 
                               onChange={this.update('email')}
                               />
                        <i className="far fa-envelope"></i>
                    </label>

                    <br />

                    <label>
                        <input type="password" 
                               placeholder="Password"
                               value={this.state.password} 
                               onChange={this.update('password')}/>
                        <i class="fas fa-lock"></i>
                    </label>

                    <br />

                    <button className="modal-form-button" onClick={this.handleSubmit}>
                        Log in
                    </button>

                    <button className="login-demo" onClick={this.handleDemo}>
                        Log In as Demo User
                    </button>

                </form>
            </div>
        )

    }
}

export default LoginForm;