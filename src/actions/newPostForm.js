export const updateNewPostForm = formData => {
    return {
        type: 'UPDATE_NEW_POST_FORM',
        payload: formData
    }
}

export const resetNewPostForm = () => {
    return {
        type: 'RESET_NEW_POST_FORM'
    }
}
