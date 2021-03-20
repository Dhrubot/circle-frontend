import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {

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
        login(loginFormData, history)
    }
    return (
        <div className='index'><br></br><br></br><br></br>
            <Container className="container h-100 d-flex justify-content-center">
                <Row className="login-row"> 
                    {/* <Col md={8}>
                        <Card>
                            <Card.ImgOverlay>
                            <h2 className='text-primary'>Welcome to Circle!</h2>
                            <h4 className='text-primary'>Social network built by you, for you.</h4>
                            </Card.ImgOverlay>
                        
                            <Image src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/313-jir7052-chim.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6de8f3daea74222d9f93aa06f66e8de9" className='rounded mx-auto pt-4' fluid/>
                        </Card>
                    </Col> */}
                    <Col md={3}>
                    </Col>
                    <Col md={6} className="float-right">
                    <div className="panel panel-default box-shadow shadow-sm p-3 mb-5 bg-dark rounded">
                            <div className="panel-heading text-center">
                                <span className="text-primary h4">Login Here</span>
                            </div><br></br>
                            <hr></hr>
                            {/* {<!--.panel-heading-->} */}
                            <div className="panel-body">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group value={loginFormData.username}>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control name='username' onChange={handleInputChange} placeholder="Username" />
                                    </Form.Group>
                                    <Form.Group value={loginFormData.password}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name='password' onChange={handleInputChange} type='password' placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="login-button">
                                        LOGIN
                                    </Button>
                                    <br></br>
                                    <div className="login-form-footer">
                                        <p> Don't have an account? <Link to='/signup'>SIGN UP</Link></p>
                                    </div>
                                </Form>
                            </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginFormData
    }
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login)