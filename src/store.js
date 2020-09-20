import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import loginFormData from './reducers/loginFormData'
import signupFormData from './reducers/signupFormData'
import newPostFormData from './reducers/newPostFormData'
import userPosts from './reducers/userPosts'
import userFollowingsPosts from './reducers/userFollowingsPosts'

const reducer = combineReducers({
    currentUser,
    userPosts,
    userFollowingsPosts,
    loginFormData,
    signupFormData,
    newPostFormData
})

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose;


const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store