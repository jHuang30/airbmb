import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {email:'', password:''},
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return(e) => {
            this.setState({[field]:e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault;
        this.props.action(this.state)
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
                <form>
                    {errors}

                    <label>Email Address
                        <input type="text" 
                               value={this.state.email} 
                               onChange={this.update('email')}/>
                    </label>

                    <br />

                    <label>Password
                        <input type="text" 
                               value={this.state.password} 
                               onChange={this.update('password')}/>
                    </label>

                <br />

                    <button onClick={this.handleSubmit}>
                        Log In
                    </button>
                </form>
            </div>
        )

    }
}

export default LoginForm;