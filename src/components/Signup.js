import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm'
import { signup } from '../actions/currentUser'

const Signup = ({ signupFormData, updateSignupForm, signup }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='username'
                placeholder='Username' value={signupFormData.username}
                onChange={handleInputChange} />
            <input type='email' name='email'
                placeholder='Email' value={signupFormData.email}
                onChange={handleInputChange} />
            <input type='password' name='password'
                placeholder='Password' value={signupFormData.password}
                onChange={handleInputChange} />
            <input type='password' name='password_confirmation'
                placeholder='Password Confirmation' value={signupFormData.password_confirmation}
                onChange={handleInputChange} />
            <input type='submit' value='Sign up' />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupFormData
    }
}


export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)