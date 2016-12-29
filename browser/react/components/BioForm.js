import React from 'react';

const BioForm = (props) => {
  return (
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <h1>Bio</h1>
        <form onSubmit={(event) => {props.createBio(event)}}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              value={props.firstname}
              onChange={(event) => {props.updateInput('firstname', event)}}
              type="firstname"
              className="form-control"
              id="firstname"
              aria-describedby="firstNameHelp"
              placeholder="Enter First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              value={props.lastname}
              onChange={(event) => {props.updateInput('lastname', event)}}
              type="lastname"
              className="form-control"
              id="lastname"
              placeholder="Enter Last Name" />
          </div>
          <div className="form-group">
            <label htmlFor="self">Self</label>
            <input
              value={props.self}
              onChange={(event) => {props.updateInput('self', event)}}
              type="self"
              className="form-control"
              id="self"
              placeholder="tell everyone about yourself" />
          </div>
          <button type="submit" className="btn btn-primary">Create Bio</button>
        </form>
      </div>
    </div>
  )
}

export default BioForm;
