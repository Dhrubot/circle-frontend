import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/userPosts";
import { createNewUserLike } from "../actions/userPosts";
import CommentList from "./CommentList";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class  UserPost extends React.Component {
  render() {
    const p = this.props.post;

    return ( 
        <Card>
            <Card.Header>
                <Card.Title>You haven't posted anything yet.</Card.Title>
            </Card.Header>
            <Card.Img src="https://picsum.photos/200" />
            <Card.Body>
                Create you first post and share it with your circle.
            </Card.Body>
        </Card>
    );

  }
}

const mapStateToProps = ({ currentUser, userPosts }) => {
  return {
    currentUser,
    userPosts,
  };
};

export default connect(mapStateToProps, { createNewUserLike, deletePost })(
  UserPost
);
