import React, {Component} from 'react';
import { connect } from 'react-redux';
import RightSidebar from '../components/RightSidebar';

const mapStateToProps = function (state, ownProps) {
  return {
    user: state.user.user,
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return  {}
}

const RightSidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSidebar);

export default RightSidebarContainer;
