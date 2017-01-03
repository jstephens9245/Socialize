import React, {Component} from 'react';
import { connect } from 'react-redux';
import Posts from '../components/Posts';
import {deletePost, updatePost} from '../redux/action-creators/posts';
import axios from 'axios';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts.posts,
    user: state.user.user,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editPost: function(id, post) {
      dispatch(updatePost(id, post))
    },
    deletePost: function(id) {
      dispatch(deletePost(id));
    }
  };
}

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

export default PostsContainer;
