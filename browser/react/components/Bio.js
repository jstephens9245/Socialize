import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const bio = props.user.bio;

  return (
    <div>
      <h3 className="col-xs-10 col-xs-offset-1">Bio</h3>
      <div className="row">
            <div className="col-xs-10 col-xs-offset-1" key={ bio.id }>
              <Link className="thumbnail" to={`/bio/${bio.id}`}>
                <div className="caption">
                  <h5>
                    <span>{ bio.firstname } {bio.lastname}</span>
                  </h5>
                  <small>{ bio.self }</small>
                </div>
              </Link>
            </div>
      </div>
    </div>
  );
};
