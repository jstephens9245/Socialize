import React, {Component} from 'react';
import { connect } from 'react-redux';
import LeftSidebar from '../components/LeftSidebar';

const mapStateToProps = function (state, ownProps) {
  return {
    user: state.user.user,
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return  {}
}

const LeftSidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftSidebar);

export default LeftSidebarContainer;
