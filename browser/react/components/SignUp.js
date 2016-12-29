import React from 'react';

const SignUp = (props) => {
  return (
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <h1>Signup</h1>
        <form onSubmit={(event) => {props.createUser(event, props.email, props.password)}}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              value={props.email}
              onChange={(event) => {props.updateInput('email', event)}}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={props.password}
              onChange={(event) => {props.updateInput('password', event)}}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmation_password">Confirm Password</label>
            <input
              value={props.confirmPassword}
              onChange={(event) => {props.updateInput('confirmPassword', event)}}
              type="password"
              className="form-control"
              id="confirmation_password"
              placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
