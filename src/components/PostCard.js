import React from 'react'


const PostCard = props => {
    return (
        <div className='PostCard'>
            <h4> {props.post.title}</h4>
            <p>{props.post.description}</p>
        </div>
    )
}


export default PostCard