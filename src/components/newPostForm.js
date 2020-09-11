import React from 'react'
import { connect } from 'react-redux'
import { updateNewPostForm } from '../actions/newPostForm'


const newPostForm = ( { newPostFormData, updateNewPostForm } ) => {

    const handleOnChange = (e) => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...newPostFormData,
            [name]: value
        }

        updateNewPostForm(updatedFormInfo)

    }

    const handleOnSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className='newPostForm'>
            <form onSubmit={handleOnSubmit}>
                <label>
                    Title
                    <input type='text' name='title' onChange={handleOnChange} value={newPostFormData.title} />
                </label>
                <label>
                    Location
                    <input type='text' name='location' onChange={handleOnChange} value={newPostFormData.location} />
                </label>
                <label>
                    Description
                    <textarea type='textarea' name='description' onChange={handleOnChange} value={newPostFormData.description} />
                </label>  
                <input type='submit' value='New Post'/>
            </form>
        </div>
    )
}

const mapStateToProps = ({ newPostFormData }) => {
    return {
        newPostFormData
    }
}
export default connect(mapStateToProps, { updateNewPostForm })(newPostForm)