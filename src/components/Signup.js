import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm'
import { signup } from '../actions/currentUser'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


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
        console.log('I am here')
        event.preventDefault()
        signup(signupFormData)
    }
    return (
        <>
            <Container>
                <Row>
                    <Col md={3}>

                    </Col>
                    <Col md={6} className='float-right'>
                        <Form onSubmit={handleSubmit}>
                            <legend style={{ color: '#008ae6'}}>Sign Up</legend>
                            <hr></hr>
                            <h6>It's free and always will be.</h6>
                            <Form.Group controlId="formBasicUsername" value={signupFormData.username}>
                                <Form.Label>Username</Form.Label>
                                <Form.Control name='username' onChange={handleInputChange} placeholder="Username" />
                            </Form.Group>
                            <Form.Group value={signupFormData.email}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control name='email'onChange={handleInputChange} type="email" placeholder="example@email.com" />
                            </Form.Group>
                            <Form.Group value={signupFormData.password}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' onChange={handleInputChange} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group value={signupFormData.passwordConfirmation}>
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control name='password_confirmation' onChange={handleInputChange} type="password" placeholder="Confirm your password" />
                            </Form.Group>
                            <Row>
                                <br></br>
                                <span className="help-block">By clicking Create my account, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.</span>
                                <Button variant="success" className='btn-block signup-btn' type="submit">
                                    Sign up
                                </Button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupFormData
    }
}


export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)