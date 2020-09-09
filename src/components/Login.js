import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'

const Login = ({ loginFormData, updateLoginForm, login }) => {

    const handleInputChange = event => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input type='text' name='username' 
            placeholder='Username' value={loginFormData.username} 
            onChange={ handleInputChange }/>
            <input type='password' name='password' 
            placeholder='Password' value={loginFormData.password}
            onChange={ handleInputChange }/>
            <input type='submit' value='Login' />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginFormData
    }
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login)