import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import CommentForm from './CommentForm'


const CommentList = ({ post }) => {


    return (
        <div>
            <hr></hr>
            <ListGroup variant="flush" className='comment-list-group'>
            {post && post.comments.map(comment => (
                <div key={comment.id}>
                    <ListGroup.Item><strong>{comment.commentor.username[0].toUpperCase() + comment.commentor.username.slice(1)}  </strong> {comment.body}</ListGroup.Item>
                </div>
            )
            )}

            </ListGroup>
            <hr></hr>
            <CommentForm post={post}/>
        </div>
    )
}

export default (CommentList)