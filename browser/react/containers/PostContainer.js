import React, {Component} from 'react';
import { connect } from 'react-redux';
import Posts from '../components/Posts';
import {signUpUser, updateState} from '../redux/action-creators/signup';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts.posts,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

export default PostsContainer;
