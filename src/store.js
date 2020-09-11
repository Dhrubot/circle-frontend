import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import users from './reducers/users'
import currentUser from './reducers/currentUser'
import loginFormData from './reducers/loginFormData'
import signupFormData from './reducers/signupFormData'
import newPostFormData from './reducers/newPostFormData'

const reducer = combineReducers({
    users,
    currentUser,
    loginFormData,
    signupFormData,
    newPostFormData
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store