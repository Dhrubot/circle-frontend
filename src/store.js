import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import users from './reducers/users'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    users
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store