const initialState = {
    title: '',
    location: '',
    description: '',
}



export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_NEW_POST_FORM':
            return action.payload
        case 'RESET_NEW_POST_FORM':
            return initialState
        default:
            return state
    }
}