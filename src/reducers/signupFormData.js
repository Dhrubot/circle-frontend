const initialState = {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
}



export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SIGNUP_FORM':
            return action.payload
        case 'CLEAR_SIGNUP_FORM':
            return initialState
        default:
            return state
    }
}