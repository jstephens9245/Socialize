import React, {Component} from 'react';
import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import {signUpUser, updateState} from '../redux/action-creators/signup';

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.signup.email,
    password: state.signup.password,
    confirmPassword: state.signup.confirmPassword,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateInput: (field, event) => {
      dispatch(updateState(field, event.target.value))
    },

    createUser: (e, email, password) => {
      e.preventDefault();
      console.log(ownProps);
      dispatch(signUpUser({email: email, password: password}))
    }

  };
}

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

export default SignUpContainer;
