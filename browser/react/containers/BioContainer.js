import React, {Component} from 'react';
import { connect } from 'react-redux';
import AllUsers from '../components/AllUsers';
import axios from 'axios';

const mapStateToProps = function (state, ownProps) {
  return {
    bios: state.bios.bios,
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return  {
    addFriend: function(user, firstname, lastname, self) {
      axios.post('/api/users/addfriend', {user, firstname,
      lastname, self})
      .then(res => {
        console.log(res.data);
      })
    },
    mutualFriends: function(id) {
      let result = null
      axios.get('/api/friends')
      .then(res => {
        console.log(res.data);
        result = res.data
      })
      return result;
    }
  }
}

const BioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsers);

export default BioContainer;
