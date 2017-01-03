import React, {Component} from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import {updatePost, setStatePostInput} from '../redux/action-creators/posts';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts.posts,
    selectedPost: state.posts.selected,
    inputValue: state.posts.inputValue,

  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: function(evt) {
      const value = evt.target.value;
      dispatch(setStatePostInput(value))
    },

    handleSubmit: function(event, inputValue, id) {
      event.preventDefault();
      dispatch(updatePost(inputValue, id));
    }
  }
}

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

export default PostContainer;
