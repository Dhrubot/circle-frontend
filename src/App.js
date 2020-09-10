import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import Login from './components/Login'
import Logout from './components/Logout'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {

    return (
      <div className="App">
        {this.props.currentUser ? <Logout /> : <Login />}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
