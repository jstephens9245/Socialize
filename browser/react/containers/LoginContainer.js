import React, {Component} from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import {getUser, updateLoginEmail, updateLoginPassword} from '../redux/action-creators/login';

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.login.email,
    password: state.login.password,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateEmailInput: (field, event) => {
      dispatch(updateLoginEmail(event.target.value))
    },
    updatePasswordInput: (field, event) => {
      dispatch(updateLoginPassword(event.target.value))
    },

    login: (e, email, password) => {
      e.preventDefault();
      dispatch(getUser({email: email, password: password}))
    }

  };
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
