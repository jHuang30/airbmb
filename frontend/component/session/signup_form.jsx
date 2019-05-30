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

    renderErrors(){
        let errors = Object.values(this.props.errors);

        errors = errors.map(error => {
            if (error == "Fname can't be blank"){
                error = "First name can't be blank";
            } else if (error == "Lname can't be blank"){
                error = "Last name can't be blank"
            }
            return <li>{error}</li>
        })

        return (

            <ul>
                {errors}
            </ul>
        )

    }



    render() {
        const errors = this.renderErrors();
        return (
                <form className="modal-form">

                <p className="close-button" onClick={this.props.closeModal}>X</p>

                    <h1 className="welcome-message">
                        Please Sign Up
                    </h1>

                    {errors}

                    <br/>
                    
                    <label>
                        <input type="text"
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={this.update('email')} />
                        <i className="far fa-envelope"></i>
                    </label>

                    <br />

                    <label>
                        <input type="text"
                            placeholder="First name"
                            value={this.state.fname}
                            onChange={this.update('fname')} />
                        <i class="far fa-user"></i>
                    </label>

                    <br/>

                    <label>
                        <input type="text"
                            placeholder="Last name"
                            value={this.state.lname}
                            onChange={this.update('lname')} />
                        <i class="far fa-user"></i>
                    </label>

                    <br/>

                    <label>
                        <input type="password"
                            placeholder="Create a Password:"
                            value={this.state.password}
                            onChange={this.update('password')} />
                        <i class="fas fa-lock"></i>
                    </label>

                    <br />

                <button className="modal-form-button" onClick={this.handleSubmit}>
                        Sign Up
                    </button>
                </form>
        )

    }
}

export default SignForm;