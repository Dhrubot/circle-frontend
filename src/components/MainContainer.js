import React from 'react'
import { connect } from 'react-redux'
import PostCard from './PostCard'
import Logout from './Logout'

const MainContainer = props => {
    const currentUserPosts = props.currentUser ? props.currentUser.authored_posts : null
    const postCards = currentUserPosts ? currentUserPosts.map(p => <PostCard post={p} key={p.id}/>) : ''
    return (
        <div className='MainContainer'>
            <Logout />
            <h2>Your Posts:</h2>
            {postCards}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps)(MainContainer)