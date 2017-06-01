import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Clock from './Clock';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'

const browserHistory = createHistory();
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Clock ten = "trong" />, document.getElementById('root'));
ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {Login}>
         <Route path = "login" component = {Login} />
      </Route>
   </Router>

), document.getElementById('root'))

