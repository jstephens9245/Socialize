import React from 'react';

const Login = (props) => {
  return (
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <form onSubmit={(event) => {props.login(event, props.email, props.password)}}>
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={(event) => {props.updateEmailInput('email', event)}}
              value={props.email}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={(event) => {props.updatePasswordInput('password', event)}}
              value={props.password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => {
            location.href = `/#/`;
          }}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
