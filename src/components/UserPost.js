import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/userPosts";
import { createNewUserLike } from "../actions/userPosts";
import CommentList from "./CommentList";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";

const UserPost = (props) => {
  const p = props.post;
  const author =
    p.author.username[0].toUpperCase() + p.author.username.slice(1);
  const liker =
    p.likes.length > 0 ? p.likes[p.likes.length - 1].liker.username : "";
  const lastLiker =
    liker !== props.currentUser.username
      ? liker.length && liker[0].toUpperCase() + liker.slice(1)
      : "You";

  return (
    <Card style={{ maxWidth: "500px" }}>
      <Card.Header style={{ padding: "20px" }}>
        <Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <Image
                  width="35"
                  src="https://picsum.photos/50/50"
                  roundedCircle
                />
              </div>
              <div className="ml-2">
                <div className="h5 m-0">{author}</div>
                <div className="h7 text-muted">NY</div>
              </div>
            </div>
            <div>
              <i className="fa fa-ellipsis-h"></i>
            </div>
          </div>
        </Card.Title>
      </Card.Header>
      <Card.Body>{p.description}</Card.Body>
      <Card.Img src="https://picsum.photos/200" style={{ maxWidth: "500px" }} />
      <Accordion>
        <Card.Body>
          {p.likes.length > 0 && p.comments.length > 0 && (
            <>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center text-muted">
                  {lastLiker} and {p.likes.length - 1} others liked this
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="1"
                    className="pull-right text-muted"
                  >
                    {p.comments.length} Comments
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
            <div className="post-comment-list">
              <CommentList post={p} />
            </div>
          </Accordion.Collapse>
                </div>
              </div>
              <NavDropdown.Divider />
            </>
          )}
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="link"
                size="sm"
                className="pull-right text-muted like-btn"
                onClick={() => {
                  props.createNewUserLike(
                    p.id,
                    p.author.id,
                    props.history
                  );
                }}
              >
                <i className="fa fa-thumbs-up like-icon"></i>
                Like
              </Button>
            </div>
            <Button
              variant="link"
              size="sm"
              className="pull-right text-muted comment-btn"
            >
              <i className="fa fa-comment comment-icon"></i>
              Comment
            </Button>
          </div>
          <NavDropdown.Divider />
          <Accordion.Collapse eventKey="1">
            <div className="post-comment-list">
              <CommentList post={p} />
            </div>
          </Accordion.Collapse>
        </Card.Body>
      </Accordion>
    </Card>
  );
};

const mapStateToProps = ({ currentUser, userPosts }) => {
  return {
    currentUser,
    userPosts,
  };
};

export default connect(mapStateToProps, { createNewUserLike, deletePost })(
  UserPost
);
