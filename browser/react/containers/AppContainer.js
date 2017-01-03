import React, {Component} from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user,
    bios: state.bios.bios
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
