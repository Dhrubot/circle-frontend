import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createNewComment } from '../actions/userFollowingsPosts'
import { createNewUserComment } from '../actions/userPosts'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const CommentForm = ({ post, commentorId, createNewComment, createNewUserComment }) => {
    const [comment, setComment] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        post.author.id === commentorId ? createNewUserComment(post.id, commentorId, comment) : createNewComment(post.id, commentorId, comment)
        setComment('')
    }

    return (
        <Form>
            <Form.Row className="align-items-center">
                <InputGroup>
                <Form.Control value={comment} as="textarea" placeholder="Add a comment..." onChange={e => setComment(e.target.value)}/>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <Button size='sm' type="submit" onClick={handleSubmit}>
                                Post
                            </Button>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
            </Form.Row>
        </Form>
    )
}

const mapStateToProps = state => {
    const commentorId = state.currentUser ? state.currentUser.id : ''
    return {
        commentorId
    }
}

export default connect(mapStateToProps, { createNewComment, createNewUserComment })(CommentForm)