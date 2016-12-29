import React, {Component} from 'react';
import { connect } from 'react-redux';
import Bio from '../components/Bio';

const mapStateToProps = function (state, ownProps) {
  return {
    user: state.user.user,
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return  {}
}

const BioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bio);

export default BioContainer;
