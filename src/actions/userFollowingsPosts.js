import { BASE_URL } from './currentUser'

export const setUserFollowingsPosts = posts => {
    return {
        type: 'SET_USER_FOLLOWINGS_POST',
        payload: posts
    }
}

export const addNewLike = post => {
    return {
        type: 'ADD_NEW_LIKE',
        payload: post
    }
}

export const addNewComment = comment => {
    return {
        type: 'ADD_NEW_COMMENT',
        payload: comment
    }
}

export const getUserFollowingsPosts = (id) => {
    return dispatch => {
        return fetch(`${BASE_URL}/users/${id}/posts`, {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(posts => {
                if (posts.error) {
                    alert(posts.error)
                } else {
                    dispatch(setUserFollowingsPosts(posts))
                }
            })
            .catch(console.log)
    }
}


export const createNewLike = (postId, likerId, history) => {
    const likeData = {
        post_id: postId,
        liker_id: likerId
    }
    return dispatch => {
        return fetch(`${BASE_URL}/posts/${postId}/likes`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(likeData)
        })
            .then(res => res.json())
            .then(like => {
                if (like.error) {
                    alert(like.error)
                } else {
                    dispatch(addNewLike(like))
                    history.push(`/followings/posts/${like.post_id}`)
                }
            })
            .catch(console.log)
    }
}

export const createNewComment = (postId, commentorId, formData) => {
    const commentData = {
        post_id: postId,
        commentor_id: commentorId,
        body: formData
    }
    return dispatch => {
        return fetch(`${BASE_URL}/posts/${postId}/comments`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
            .then(res => res.json())
            .then(comment => {
                if (comment.error) {
                    alert(comment.error)
                } else {
                    dispatch(addNewComment(comment))
                }
            })
            .catch(console.log)
    }
}