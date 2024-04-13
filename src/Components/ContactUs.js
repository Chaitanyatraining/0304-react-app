import React, { Component } from 'react'

class ContactUs extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        firstNameErr: '',
        lastNameErr: '',
        emailErr: '',
        phoneErr: ''
    }



    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // firstName > 4
        //  lastName > 1
        // email include @
        // phone contains 10 digits
        this.validateForm()
    }

    validateForm = () => {
        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let phoneErr = '';

        //firstName > 4
        if (this.state.firstName.length < 4) {
            firstNameErr = 'firstName should contain atleast 4 char'
        }

        //lastName > 1
        if (this.state.lastName.length < 1) {
            lastNameErr = 'lastName should contain atleast 1 char'
        }

        //email inclues '@
        if (!this.state.email.includes('@')) {
            emailErr = 'Enter a valid email'
        }

        if (this.state.phone.length !== 10) {
            phoneErr = 'Enter a valid contact'
        }

        // falsy values - 0, null, '', undefined, nan, false

        if (firstNameErr || lastNameErr || emailErr || phoneErr) {
            this.setState({ firstNameErr, lastNameErr, phoneErr, emailErr })
        } else {
            this.setState({ firstNameErr, lastNameErr, phoneErr, emailErr })
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <h2>ContactUs</h2>
                        <form>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Enter firstName'
                                    name='firstName'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.firstName}
                                />
                            </div>
                            <p className='text-danger'>{this.state.firstNameErr}</p>

                            <div>
                                <input
                                    type="text"
                                    placeholder='Enter lastName'
                                    name='lastName'
                                    className='form-control mt-1'
                                    onChange={this.handleChange}
                                    value={this.state.lastName}
                                />
                                <p className='text-danger'>{this.state.lastNameErr}</p>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder='Enter Email'
                                    name='email'
                                    className='form-control mt-1'
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                                <p className='text-danger'>{this.state.emailErr}</p>

                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder='Enter phone'
                                    name='phone'
                                    className='form-control mt-1'
                                    onChange={this.handleChange}
                                    value={this.state.phone}
                                />
                                <p className='text-danger'>{this.state.phoneErr}</p>

                            </div>

                            <div className='mt-2 text-center'>
                                <button className='btn btn-primary'
                                    onClick={this.handleSubmit}
                                >Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        )
    }
}

export default ContactUs