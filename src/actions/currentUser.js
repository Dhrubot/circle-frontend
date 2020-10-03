import { resetSignupForm } from "./signupForm"
import { getUserPosts, clearUserPosts } from './userPosts'

export const BASE_URL = 'http://localhost:3001//api/v1'


export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    }
}

export const clearCurrentUser = () => {
    return {
        type: 'LOGOUT_CURRENT_USER'
    }
}

export const login = (credentials, history) => {
    return dispatch => {
        return fetch(`${BASE_URL}/login`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
                    .then(res => res.json())
                    .then(user => {
                        if (user.error) {
                            alert(user.error)
                        } else {
                            dispatch(setCurrentUser(user))
                            dispatch(getUserPosts(user.id))
                            history.push('/')
                        }
                    })
                    .catch(console.log)
    }
}

export const signup = formData => {
    const newUserCredentials = {
        user: formData
    }
    return dispatch => {
        return fetch(`${BASE_URL}/signup`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUserCredentials)
        })
            .then(res => res.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)
                } else {
                    dispatch(setCurrentUser(user))
                    dispatch(resetSignupForm())
                }
            })
            .catch(console.log)
    }
}

export const logout = (history) => {
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearUserPosts())
        history.push('/')
        return fetch(`${BASE_URL}/logout`, {
            credentials: 'include',
            method: 'DELETE'
        })
        .then()
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch(`${BASE_URL}/get_current_user`, {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
                    .then(res => res.json())
                    .then(user => {
                        if (user.error) {
                            console.log(user.error)
                        } else {
                            dispatch(setCurrentUser(user))
                            dispatch(getUserPosts(user.id))
                        }
                    })
                    .catch(console.log)
    }
}