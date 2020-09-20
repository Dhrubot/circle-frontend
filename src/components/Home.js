/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Col'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Home = ({ userFollowingsPosts, history, currentUser }) => {

    const infoCard = 
            <Card>
                <Card.Body>
                    <Card.Title>@{currentUser.username}</Card.Title>
                        <Card.Subtitle className=" mb-2 text-muted">{currentUser.email}</Card.Subtitle>
                            <div className="py-4"></div>
                        <Card.Footer style={{ color: '#008ae6', fontSize: '12pt' }}>
                            <h5>Welcome to <strong>Circle.</strong> </h5> <br></br>
                            <h6>Updates from your friends.</h6><br></br>
                        </Card.Footer>
                        <Card.Footer>
                            Have something you want to share?<br></br>
                            Create a post and share it with <br></br>
                            your friends.
                        </Card.Footer>
                </Card.Body>
            </Card>


    const postCards = userFollowingsPosts.length > 0 ?
    
        userFollowingsPosts.map((p, index) => {

            const handleOnClick = e => {
                e.preventDefault()
                history.push(`followings/posts/${p.id}`)
            }


            return (
                <div key={index}>
                    <a style={{ cursor: 'pointer' }} onClick={handleOnClick}>
                        <Card>
                            <Card.Header>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-2">
                                            <Image width="35" src="https://picsum.photos/50/50" roundedCircle />
                                        </div>
                                        <div className="ml-2">
                                            <div className="h5 m-0">@{p.author.username[0].toUpperCase() + p.author.username.slice(1)}</div>
                                            <div className="h7 text-muted">{p.location}</div>
                                        </div>
                                    </div>
                                </div>                                            
                            </Card.Header>

                            <Card.Body>
                                <Card.Text> {p.description} </Card.Text>
                            </Card.Body>

                            <Card.Footer >
                                <Card.Text style={{ color: '#008ae6'}}>
                                {p.likes.length} Likes this&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{p.comments.length} Comments
                                </Card.Text>
                            </Card.Footer>
                        </Card>
                    </a>
                    <div className="py-4"></div>
                    </div>
                )
            }
        )

        : 

        <Card>
            <Card.Header>
                <Card.Title>You are not following any users Yet.</Card.Title>
            </Card.Header>
            <Card.Body>
                Start finding and following other users that you know to your cirlce to see their shared content.
            </Card.Body>
        </Card>



    return (
        <div>
            <Container fluid>
                <Row className='row'>
                    <Col md={4}>
                        <div className="py-4"></div>
                        {infoCard}
                    </Col>
                    <Col md={8}>
                        <div className="py-4"></div>
                        {postCards}
                    </Col>
                </Row>
            </Container>

        </div>)

}

const mapStateToProps = ({ userFollowingsPosts, currentUser }) => {
    const userId = currentUser.id
    return {
        userFollowingsPosts,
        userId,
        currentUser
    }
}

export default connect(mapStateToProps)(Home)