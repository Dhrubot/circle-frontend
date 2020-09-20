import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/userPosts'
import { createNewUserLike } from '../actions/userPosts'
import CommentList from './CommentList'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class UserPost extends React.Component {


    render () { 

        const p = this.props.post

        
        return (

            <div key={p.id}>
                <div className="py-4"></div>
                <Card>
                    <Card.Header>
                        <div className="d-flex justify-content-center align-items-center">
                            <Card.Title>{p.title}</Card.Title>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text> {p.description} </Card.Text>
                    </Card.Body>

                    <Card.Footer>
                        <Accordion>
                            <Card.Body className='text-left text-muted'>
                                <Button variant="outline-primary" size="sm" onClick={() => {
                                    this.props.createNewUserLike(p.id, p.author.id, this.props.history)
                                }}>
                                    {p.likes.length} likes
                                            </Button>



                                <Accordion.Toggle as={Button} variant="link" eventKey="1" className="pull-right text-muted">
                                    {p.comments.length} Comments
                                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <CommentList post={p} />
                                </Accordion.Collapse>
                            </Card.Body>
                        </Accordion>
                    </Card.Footer>
                </Card>
                <Button size='sm' variant='danger' onClick={() => {
                    this.props.deletePost(p.id, this.props.history)
                    this.props.history.push('/profile')}}>
                    Delete Post
                </Button>
            </div>

            

        )
    }

}


const mapStateToProps = ( { currentUser, userPosts } ) => {
    return {
        currentUser,
        userPosts
    }
}

export default connect(mapStateToProps, { createNewUserLike, deletePost })(UserPost)