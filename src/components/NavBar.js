import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'

const NavBar = (props) => {

    const currentUsername = props.currentUser? props.currentUser.username[0].toUpperCase() + props.currentUser.username.slice(1) : ''
    return (
      <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Navbar.Brand as= { Link } to="/">Circle</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={ Link } to='/'>Home</Nav.Link>
                </Nav>
                    {props.loggedIn ?
                <Nav>   
                        <Nav.Link as={ Link } to='/posts/new'>Create Post</Nav.Link>
                        <NavDropdown
                            className="nav-dropdown" 
                            title={
                                <div className="pull-left">
                                    <Image width='25' src="https://picsum.photos/50/50" roundedCircle fluid />  
                                    {currentUsername}
                                </div>
                            } 
                        >
                            <NavDropdown.Item as={ Link } to='/posts/new'>Create Post</NavDropdown.Item>
                            <NavDropdown.Item as={ Link } to='/profile'>Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Logout /></NavDropdown.Item> 
                        </NavDropdown>
                </Nav>
                    :
                <Nav>
                    <Nav.Link href='/login'>Login</Nav.Link>
                </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        loggedIn: !!state.currentUser
    }
}


export default connect(mapStateToProps)(NavBar)