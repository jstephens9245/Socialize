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
import PostsFormContainer from './containers/PostsFormContainer';
import PostContainer from './containers/PostContainer';
import MessageFormContainer from './containers/MessageFormContainer';
import AppContainer from './containers/AppContainer';
import BioFormContainer from './containers/BioFormContainer';

import {loadAllPosts, getPostById} from './redux/action-creators/posts'
import {loadAllMessages} from './redux/action-creators/messages'
import {loadAllBios} from './redux/action-creators/bios'

const onPostEnter = function (nextRouterState) {
  const postId = nextRouterState.params.postId;
  store.dispatch(getPostById(postId));
};

const onUserEnter = function () {
  store.dispatch(loadAllPosts());
  store.dispatch(loadAllMessages());
};
const onAppEnter = function () {
  store.dispatch(loadAllBios());
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer} onEnter={onAppEnter}>
        <Route path='/login' component={LoginContainer}/>
        <Route path='/signup' component={SignUpContainer}/>
        <Route path='/:userId' component={UserContainer} onEnter={onUserEnter}/>
        <Route path='/:userId/message' component={MessageFormContainer}/>
        <Route path='/:userId/bio' component={BioFormContainer}/>
        <Route path='/:userId/posts/:postId' component={PostContainer} onEnter={onPostEnter}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
