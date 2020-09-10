export default (state = null, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return action.payload
        case 'LOGOUT_CURRENT_USER':
            return null
        default:
            return state
    }
}