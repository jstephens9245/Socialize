import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux';
import axios from 'axios';

import App from './components/App';
import Bio from './components/Bio';

import UserContainer from './components/User';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import PostFormContainer from './containers/PostFormContainer';
import MessageFormContainer from './containers/MessageFormContainer';
import AppContainer from './containers/AppContainer';
import BioFormContainer from './containers/BioFormContainer';

import {loadAllPosts} from './redux/action-creators/posts'
import {loadAllMessages} from './redux/action-creators/messages'


const onUserEnter = function () {
  store.dispatch(loadAllPosts());
  store.dispatch(loadAllMessages());
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer}>
        <Route path='/login' component={LoginContainer}/>
        <Route path='/signup' component={SignUpContainer}/>
        <Route path='/:userId' component={UserContainer} onEnter={onUserEnter}/>
        <Route path='/:userId/message' component={MessageFormContainer}/>
        <Route path='/:userId/bio' component={BioFormContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
