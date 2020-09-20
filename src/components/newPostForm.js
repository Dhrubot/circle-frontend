import React from 'react'
import { connect } from 'react-redux'
import { updateNewPostForm } from '../actions/newPostForm'
import { createNewPost } from '../actions/userPosts'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const NewPostForm = ( { newPostFormData, updateNewPostForm, history, createNewPost } ) => {

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
        createNewPost(newPostFormData, history)
    }

    return (
        <div className='newPostForm'>
            <Container fluid>
                <Row>
                    <Col className="col-xs-4 col-xs-offset-4 p-4 m-2">
                <Card className="text-center p-4">
                    <Card.Header>Create a new post</Card.Header>
                        <Card.Body>
                        <Form onSubmit={ handleOnSubmit }>
                            <Form.Group  value={newPostFormData.title}>
                            <Card.Title><Form.Label>Title</Form.Label></Card.Title>
                                <Form.Control name='title' onChange={ handleOnChange } placeholder="Title" />
                            </Form.Group>
                            <Form.Group value={newPostFormData.location}>
                                <Card.Title><Form.Label>Location</Form.Label></Card.Title>
                                <Form.Control name='location' onChange={ handleOnChange } placeholder="Add current location" />
                            </Form.Group>
                            <Form.Group value={newPostFormData.description}>
                                <Card.Title><Form.Label>Description</Form.Label></Card.Title>
                                <Form.Control as='textarea' name='description' onChange={ handleOnChange } placeholder="Add descripton" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                New Post
                            </Button>
                        </Form>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

const mapStateToProps = ({ newPostFormData }) => {
    return {
        newPostFormData
    }
}
export default connect(mapStateToProps, { updateNewPostForm, createNewPost })(NewPostForm)