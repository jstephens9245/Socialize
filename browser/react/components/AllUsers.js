import React from 'react';
import {Link} from 'react-router';


export default function (props) {

  const bio = props;
  const mutual = props.mutualFriends(bio.id)
  return (
    <div>
      <h3 className="col-xs-10 col-xs-offset-1"></h3>
      <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <div className="thumbnail">
                <div className="caption">
                  <h5>
                    <span>{ bio.firstname } {bio.lastname}</span>
                  </h5>
                  <small>{ bio.self }</small>
                </div>
              </div>

              <button className="btn btn-primary" onClick={() => {
                bio.addFriend(bio.id, bio.firstname, bio.lastname, bio.self)
              }}>Add Friend</button>

            </div>
      </div>
    </div>
  );
};
