import { resetNewPostForm } from './newPostForm'
import { BASE_URL } from './currentUser'

export const setUserPosts = posts => {
    return {
        type: 'SET_USER_POSTS',
        payload: posts
    }
}


export const clearUserPosts = posts => {
    return {
        type: 'CLEAR_USER_POSTS',
    }
}


export const addNewPost = (post) => {
    return {
        type: 'ADD_NEW_POST',
        payload: post
    }
}

export const addNewUserComment = comment => {
    return {
        type: 'ADD_NEW_USER_COMMENT',
        payload: comment
    }
}

export const addNewUserLike = post => {
    return {
        type: 'ADD_NEW_USER_LIKE',
        payload: post
    }
}

export const deletePostSignal = id => {
    return {
        type: "DELETE_POST",
        payload: id
    }
}

export const getUserPosts = (id) => {
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
                    dispatch(setUserPosts(posts))
                }
            })
            .catch(console.log)
    }
}

export const createNewPost = (formData, history) => {
    return dispatch => {
        return fetch(`${BASE_URL}/posts`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(post => {
                if (post.error) {
                    alert(post.error)
                } else {
                    dispatch(addNewPost(post))
                    dispatch(resetNewPostForm())
                    history.push(`/profile`)
                }
            })
            .catch(console.log)
    }
}

export const deletePost = (postId, history) => {
    return dispatch => {
        return fetch(`${BASE_URL}/posts/${postId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(r => r.json())
            .then(post => {
                if (post.error) {
                    alert(post.error)
                } else {
                    dispatch(deletePostSignal(post.id))
                    history.push('/profile')
                }
            })
            .catch(console.log)

    }

}

export const createNewUserComment = (postId, commentorId, formData) => {
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
                    dispatch(addNewUserComment(comment))
                }
            })
            .catch(console.log)
    }
}


export const createNewUserLike = (postId, likerId, history) => {
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
                    dispatch(addNewUserLike(like))
                    history.push(`/profile`)
                }
            })
            .catch(console.log)
    }
}


