/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import UserPost from './UserPost'


const UserPosts = ( {userPosts, user, history} ) => {

    const postCards = userPosts.length > 0 ?
        userPosts.map(p => {

           return (
               <div key={p.id}>
                <UserPost post={p} history={history}/>
               </div>
                )
            }
        )
        :
        // <Card>
        //     <Card.Header>
        //         <Card.Title>You haven't posted anything yet.</Card.Title>
        //     </Card.Header>
        //     <Card.Body>
        //         Create you first post and share it with your circle.
        //     </Card.Body>
        // </Card>

        <Card style={{maxWidth: '500px'}}>
        <Card.Header style={{padding: '20px'}}>
            <Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                    <Image width="40" src="https://picsum.photos/50/50" roundedCircle />
                        <span style={{padding: '10px'}}>Dhrubo</span>
                    </div>
                </div>
            </Card.Title>
        </Card.Header>
        <Card.Body>
            Create you first post and share it with your circle.
        </Card.Body>
        <Card.Img src="https://picsum.photos/200" style={{maxWidth: '500px'}} />
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
         </Card.Body>
    </Card>


    return (
        <Container>
            <Row>           
                <Col md={4}>
                    <div className="py-4"></div>
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="mr-2">
                                                <Image width="100" src="https://picsum.photos/50/50" roundedCircle />
                                            </div>
                                            <div className="ml-2">
                                                <div className="h5 m-0">@{user ? user.username[0].toUpperCase() + user.username.slice(1) : ''}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text as='div'>
                                    <h6 className="text-muted">{user.email}</h6>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className="h6 text-muted">
                                        Followers
                                    </div>
                                    <div className="h5">
                                        {user ? user.followers.length : ''}
                                    </div>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <div className="h6 text-muted">
                                        Following
                                    </div>
                                    <div className="h5">
                                        {user ? user.followings.length : ''}
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                    </Card>
                </Col>
                <Col md={8}>
                    <div className="py-4"></div>
                    {postCards}
                </Col>
            </Row>
        </Container>
    )

}

const mapStateToProps = ( {userPosts, currentUser} ) => {
    const user = currentUser ? currentUser : ''
    return {
        userPosts,
        user
    }
}

export default connect(mapStateToProps)(UserPosts)