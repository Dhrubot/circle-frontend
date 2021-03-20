import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router"

const Logout = ({ logout, history }) => {

    const handleOnCLick = () => {
        logout(history)
    }
    return (

        <Button variant='danger' className="logout-btn" size='sm' onClick={ handleOnCLick }>
            Logout
        </Button>
    )
}



export default withRouter(connect(null, { logout })(Logout))