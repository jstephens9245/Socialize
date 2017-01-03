import React, {Component} from 'react';
import { connect } from 'react-redux';
import BioForm from '../components/BioForm';
import Bio from '../components/Bio';
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
      dirty: false,
    }
    this.updateInput = this.updateInput.bind(this);
    this.createBio = this.createBio.bind(this);
  }

  componentDidMount() {
    axios.get('/api/bio')
    .then(res => {
      console.log(res.data);
      if(res.data) this.setState({
        firstname: res.data.firstname,
        lastname: res.data.lastname,
        self: res.data.self,
        dirty: true,
      })
    })
  }
  updateInput (field, event) {
    this.setState({[field]: event.target.value})
  }

  createBio (e) {
    e.preventDefault();
    axios.post('/api/bio', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      self: this.state.self,
    })
    .then(res => res.data)
    .then(bio => console.log(bio));
    this.setState({dirty: true})
  }

  render() {
    return (
      <div>
        { this.state.dirty ? (
          <Bio firstname={this.state.firstname}
            lastname={this.state.lastname}
            self={this.state.self} />
          ) : null }

        <BioForm
          updateInput={this.updateInput}
          createBio={this.createBio}
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          self={this.state.self} />
      </div>

    )
  }
}

const BioFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BioFC);

export default BioFormContainer;
