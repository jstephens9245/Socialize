import React, {Component} from 'react';
import { connect } from 'react-redux';
import AllUsers from '../components/AllUsers';
import {getMutualById, receiveMutualFriends} from '../redux/action-creators/user'
import axios from 'axios';

const mapStateToProps = function (state, ownProps) {
  // console.log(ownProps);
  return {
    id: ownProps.id,
    firstname: ownProps.firstname,
    lastname: ownProps.lastname,
    self: ownProps.self,
    loggedInUser: state.user.user,
    // mutual: state.user.mutualFriends,
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
  }
}

class AU extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: props.loggedInUser,
      mutual: [],
      id: props.id,
      firstname: props.firstname,
      lastname: props.lastname,
      self: props.self,
    }
    this.mutualFriends = this.mutualFriends.bind(this);
  }

  componentDidMount() {
    this.mutualFriends(this.state.id);
  }

  mutualFriends(id) {
    axios.get(`/api/friends/${id}`)
    .then(res => {
      this.setState({mutual: res.data})
      })
  }

  render() {
    return (
      <AllUsers
        id={this.state.id}
        loggedInUser={this.state.loggedInUser}
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        self={this.state.self}
        mutual={this.state.mutual}
        mutualFriends={this.mutualFriends} />
    )
  }
}


const BioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AU);

export default BioContainer;
