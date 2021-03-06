import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const bio = props;

  return (
    <div>
      <h3 className="col-xs-10 col-xs-offset-1"></h3>
      <div className="row">
            <div className="col-xs-10 col-xs-offset-1" >
              <div className="thumbnail" >
                <div className="caption">
                  <h5>
                    <span>{ bio.firstname } {bio.lastname}</span>
                  </h5>
                  <small>{ bio.self }</small>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
};
