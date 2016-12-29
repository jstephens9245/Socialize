import React, {Component} from 'react';
import { connect } from 'react-redux';
import MessageForm from '../components/MessageForm';
import {setStateMessageInput, addNewMessage} from '../redux/action-creators/messages';

const mapStateToProps = function (state, ownProps) {
  return {
    inputMessValue: state.messages.inputMessValue,
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return  {
    handleChange: function(evt) {
      const value = evt.target.value;
      dispatch(setStateMessageInput(value))
    },

    handleSubmit: function(event, inputValue) {
      event.preventDefault();
      dispatch(addNewMessage(inputValue));
    }
  }
}

const MessageFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);

export default MessageFormContainer;
