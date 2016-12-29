import React from 'react';
import {Link} from 'react-router';

const Navbar = (props) => {
  return (
    <div className="navbar navbar-fixed-top navbar-inverse" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav-items">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand navbar-brand-red" href="/">Socialize</a>
        </div>
        <div id="nav-items" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="#/">Home</a></li>
            <li><a href="#/login">Login</a></li>
            <li><a href="#/signup">Sign Up</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar;
