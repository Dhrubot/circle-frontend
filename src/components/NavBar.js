import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout'

const NavBar = (props) => {

    return (
      <div className='nav'>
            {props.currentUser ? <strong>Welcome, {props.currentUser.username}!</strong>  : ''}
            { props.currentUser ? <Logout/> : <Login/> }
      </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps)(NavBar)