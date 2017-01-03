import React, {Component} from 'react';
import { connect } from 'react-redux';
import Messages from '../components/Messages';
import {signUpUser, updateState} from '../redux/action-creators/signup';

const mapStateToProps = (state, ownProps) => {
  // console.log('messagesCon state', state);
  return {
    messages: state.messages.messages,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
