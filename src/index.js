import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router basename='/circle-frontend'>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

