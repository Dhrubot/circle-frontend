import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
// import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import newPostForm from './components/newPostForm'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    const  { loggedIn } = this.props
    return (
      <div className="App">
        {/* <NavBar /> */}
        <Router>
          <Route exact path='/' render={() => loggedIn ? <MainContainer/> : <Login/> }/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/profile' component={MainContainer}/>
          <Route exact path='/posts/new' component={newPostForm}/>
        </Router>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}



export default connect(mapStateToProps, { getCurrentUser })(App);
