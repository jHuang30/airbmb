import React from 'react';

class SignForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '', 
            fname: '',
            lname: '',
            password: '',
             },
            this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    componentDidMount(){
        this.props.deleteErrors();
    }
    

    handleSubmit(e) {
        e.preventDefault;
        this.props.action(this.state).then(this.props.closeModal)
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

    render() {
        const errors = this.renderErrors();
        return (
            <div>
                <form>
                    {errors}
                    

                    <label>Email address:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label>

                    <br />

                    <label>First name:
                        <input type="text"
                            value={this.state.fname}
                            onChange={this.update('fname')} />
                    </label>

                    <br/>

                    <label>Last name:
                        <input type="text"
                            value={this.state.lname}
                            onChange={this.update('lname')} />
                    </label>

                    <br/>

                    <label>Create a Password:
                        <input type="text"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>

                    <br />

                    <button onClick={this.handleSubmit}>
                        Sign Up
                    </button>
                </form>
            </div>
        )

    }
}

export default SignForm;