import React, {Component} from 'react';
import { connect } from 'react-redux';
import AllUsers from '../components/AllUsers';
import {getMutualById, receiveMutualFriends} from '../redux/action-creators/user'
import axios from 'axios';

const mapStateToProps = function (state, ownProps) {
  return {
    bios: state.bios.bios,
    mutual: state.user.mutualFriends,
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
      // axios.get(`/api/friends/${id}`)
      // .then(res => {
      //   console.log(res.data);
      //   // dispatch(getMutualById(id))
      //
      //   return res.data
      // })

      // dispatch(getMutualById(id))
    }
  }
}

// class AU extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mutual: []
//     }
//     this.mutualFriends = this.mutualFriends.bind(this);
//   }
//
//   mutualFriends(id) {
//     axios.get(`/api/friends/${id}`)
//     .then(res => {
//       console.log(res.data);
//       this.setState({mutual: res.data})
//       // dispatch(receiveMutualFriends(res.data))
//       })
//
//     // dispatch(getMutualById(id))
//   }
//   render() {
//     return (
//       <AllUsers
//         mutual={this.state.mutual}
//         mutualFriends={this.mutualFriends} />
//     )
//   }
// }


const BioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsers);

export default BioContainer;
