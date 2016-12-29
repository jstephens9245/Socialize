import React, {Component} from 'react';
import { connect } from 'react-redux';
import PostForm from '../components/PostForm';
import {addNewPost, setStatePostInput} from '../redux/action-creators/posts';

const mapStateToProps = function (state, ownProps) {
  return {
    inputValue: state.posts.inputValue,
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return  {
    handleChange: function(evt) {
      const value = evt.target.value;
      dispatch(setStatePostInput(value))
    },

    handleSubmit: function(event, inputValue) {
      event.preventDefault();
      dispatch(addNewPost(inputValue));
    }
  }
}

const PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);

export default PostFormContainer;
