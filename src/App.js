import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { getUserFollowingsPosts } from './actions/userFollowingsPosts'
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import NewPostForm from './components/newPostForm'
import UserPosts from './components/UserPosts';
import UserPost from './components/UserPost';
import UserFollowingPost from './components/UserFollowingPost';
import { Container } from 'react-bootstrap'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  componentDidUpdate(prevProps) {
    this.props.userFollowings && !prevProps.userFollowings && this.props.userFollowings.map( following => this.props.getUserFollowingsPosts(following.following_id))
  }


  
  render() {
    const  { loggedIn } = this.props
    return ( 
      <Container fluid>
      <div>
          <NavBar />
          <Switch>
            <Route exact path={ ['/', '/circle-frontend'] } render={(props) => loggedIn ? <Home {...props}/> : <Login />} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/profile' component={UserPosts} />
            <Route exact path='/posts/new' component={NewPostForm} />
            <Route exact path='/posts/:id' render={(props) =>
              <UserPost {...props}/>
            }/>
            <Route exact path='/followings/posts/:id' render={(props) => 
              <UserFollowingPost {...props}/>
            } />
          </Switch>
      </div>
      </Container>
    );
  }

}

const mapStateToProps = state => {
  const userFollowings = state.currentUser ? state.currentUser.followings : ''
  return ({
    loggedIn: !!state.currentUser,
    currentUser: state.currentUser,
    userFollowings: userFollowings
  })
}



export default connect(mapStateToProps, { getCurrentUser, getUserFollowingsPosts })(App);
