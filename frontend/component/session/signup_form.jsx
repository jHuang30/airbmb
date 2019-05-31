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
            this.handleSubmit = this.handleSubmit.bind(this),
            this.renderErrors = this.renderErrors.bind(this),
            this.altForm = this.altForm.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    componentDidMount(){
        this.props.deleteErrors();
    }
    
    altForm (){
        this.props.openModal('login')
    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.action(this.state).then(this.props.closeModal)
    }

    // renderErrors(){
    //     let errors = Object.values(this.props.errors);

    //     errors = errors.map(error => {
    //         if (error == "Fname can't be blank"){
    //             error = "First name can't be blank";
    //         } else if (error == "Lname can't be blank"){
    //             error = "Last name can't be blank"
    //         }
    //         return <li>{error}</li>
    //     })

    //     return (

    //         <ul>
    //             {errors}
    //         </ul>
    //     )

    // }


    renderErrors(part) {
        //get errrors as an array
        const errors = Object.values(this.props.errors);
        let allErrors = [];

        //get specific errors for input field
        errors.forEach(error =>
            error.includes(part) ? allErrors.push(error) : null);

        //change lname, fname to last name and first name
        allErrors = allErrors.map((error,idx) => {
            if (error == "Fname can't be blank") {
                error = "First name can't be blank";
            } else if (error == "Lname can't be blank") {
                error = "Last name can't be blank"
            }
            return <li key={idx}>{error}</li>
        })


        return (
            <ul>{allErrors}</ul>
        )
    }



    render() {
  
        return (
                <form className="modal-form signup-form">

                <p className="close-button" onClick={this.props.closeModal}>X</p>

                    <h1 className="welcome-message">
                        Please Sign Up
                    </h1>

                    {/* {errors} */}
                    
                    <label>
                        <input type="text"
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={this.update('email')} />
                        <i className="far fa-envelope"></i>
                        <div className="form-errors">{this.renderErrors('Email')}</div>
                    </label>

                    <br />

                    <label>
                        <input type="text"
                            placeholder="First name"
                            value={this.state.fname}
                            onChange={this.update('fname')} />
                        <i className="far fa-user"></i>
                        <div className="form-errors">{this.renderErrors('Fname')}</div>
                    </label>

                    <br/>

                    <label>
                        <input type="text"
                            placeholder="Last name"
                            value={this.state.lname}
                            onChange={this.update('lname')} />
                        <i className="far fa-user"></i>
                        <div className="form-errors">{this.renderErrors('Lname')}</div>
                    </label>

                    <br/>

                    <label>
                        <input type="password"
                            placeholder="Create a Password:"
                            value={this.state.password}
                            onChange={this.update('password')} />
                        <i className="fas fa-lock"></i>
                        <div className="form-errors">{this.renderErrors('Password')}</div>
                    </label>

                    <br />

                    <button className="modal-form-button" onClick={this.handleSubmit}>
                        Sign Up
                    </button>

                    <br/>
                    <p className='alter'>Already have an Airbmb account? 
                        <button className='alter-button' onClick={this.altForm}>Log in</button></p>

                </form>
        )

    }
}

export default SignForm;