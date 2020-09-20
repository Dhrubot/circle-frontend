const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_POSTS':
            return action.payload
        case 'CLEAR_USER_POSTS':
            return initialState
        case 'ADD_NEW_POST':
            return state.concat(action.payload)
        case 'DELETE_POST':
            return state.filter(post => post.id !== action.payload)

        case 'ADD_NEW_USER_LIKE':
            let index = state.findIndex(post => post.id === action.payload.post_id)
            const newArray = [...state]
            let likedPost = newArray[index]
            likedPost.likes = likedPost.likes.concat(action.payload)
            newArray[index] = likedPost
            return newArray

        case 'ADD_NEW_USER_COMMENT':
            let i = state.findIndex(post => post.id === action.payload.post_id)
            const newState = [...state]
            let myPost = newState[i]
            myPost.comments = myPost.comments.concat(action.payload)
            newState[i] = myPost
            return newState
        default:
            return state
    }
}