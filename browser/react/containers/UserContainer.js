import React, {Component} from 'react';
import { connect } from 'react-redux';
import User from '../components/User';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default UserContainer;
