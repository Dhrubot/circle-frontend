export default (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_FOLLOWINGS_POST':
            return state.concat(...state, action.payload).filter((v, i, a) => a.indexOf(v) === i)

        case 'ADD_NEW_LIKE':
            let index = state.findIndex(post => post.id === action.payload.post_id)
            const newArray = [...state]
            let likedPost =  newArray[index]
            likedPost.likes = likedPost.likes.concat(action.payload)
            newArray[index] = likedPost
            return newArray
            
        case 'ADD_NEW_COMMENT':
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