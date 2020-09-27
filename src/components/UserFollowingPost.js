import React from 'react'
import { connect } from 'react-redux'
import { createNewLike } from '../actions/userFollowingsPosts'
import CommentList from './CommentList'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class UserFollowingPost extends React.Component {
    render() {

        let post = this.props.userFollowingsPosts.length > 0 && this.props.userFollowingsPosts.find(post => post.id === parseInt(this.props.match.params.id))

        return (
            post &&
            <div className='jumbotron vertical-center'>
                <Jumbotron fluid>
                    <Container >
                        <Row>
                            <Col>
                            <h2>{post && post.title}</h2>
                            <h4>@{post.author.username[0].toUpperCase() + post.author.username.slice(1)}</h4>
                            <h4 className="mb-2 text-muted"> {post && post.location} </h4>
                            <p>{post && post.description}</p>
                            <p>
                                <Button variant="outline-primary" size="sm" onClick={() => {
                                    this.props.createNewLike(post.id, this.props.userId, this.props.history)
                                }}>
                                    {post.likes.find(like => like.liker.id === this.props.userId) ? 'Liked' : 'Like'}
                                </Button>
                            </p>
                            <strong style={{ marginRight: '5px' }}>{post && post.likes.length}</strong>Likes
                            </Col>
                            <Col>
                                <h4>Comments</h4>
                                <CommentList post={post}/>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }

}


const mapStateToProps = ({ userFollowingsPosts, currentUser }) => {
    const userId = currentUser ? currentUser.id : ''
    return {
        userFollowingsPosts,
        userId
    }
}

export default connect(mapStateToProps, { createNewLike })(UserFollowingPost)