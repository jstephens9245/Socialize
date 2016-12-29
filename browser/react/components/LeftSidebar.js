import React from 'react';
import {Link} from 'react-router';

export default function (props) {
  return (
    <sidebar>
      <section>
        <h4 className="menu-item">
          <Link to={`/${props.user.id}`}>User</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to={`/${props.user.id}/message`}>Message</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to={`/${props.user.id}/bio`}>Bio</Link>
        </h4>
      </section>
      <hr />
    </sidebar>
  );
}
