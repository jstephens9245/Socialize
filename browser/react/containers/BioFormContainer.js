import React, {Component} from 'react';
import { connect } from 'react-redux';
import BioForm from '../components/BioForm';
import axios from 'axios';
import {setStateBioInput, addNewBio} from '../redux/action-creators/messages';

const mapStateToProps = function (state, ownProps) {
  return {};
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return  {}
}

class BioFC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      self: '',
    }
    this.updateInput = this.updateInput.bind(this);
    this.createBio = this.createBio.bind(this);
  }

  updateInput (field, event) {
    this.setState({[field]: event.target.value})
  }

  createBio (e) {
    e.preventDefault();
    axios.post('/api/bio', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      self: this.state.self
    })
    .then(res => res.data)
    .then(bio => console.log(bio));
  }

  render() {
    return (
      <BioForm
        updateInput={this.updateInput}
        createBio={this.createBio}
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        self={this.state.self} />
    )
  }
}

const BioFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BioFC);

export default BioFormContainer;
