import React from 'react';
import {Link} from 'react-router';


export default function (props) {

  const bio = props;
  console.log('bio.id', props);

  let friendButton = null;

  if((props.loggedInUser.id !== bio.id) && (Object.keys(props.loggedInUser).length)) {
    console.log('user', props.loggedInUser.id);
    console.log(props.loggedInUser.id !== bio.id);
    friendButton = <button className="btn btn-primary" onClick={() => {
      bio.addFriend(bio.id, bio.firstname, bio.lastname, bio.self)
    }}>Add Friend</button>
  } else {
    friendButton = null;
  }

  return (
    <div>
      <h3 className="col-xs-10 col-xs-offset-1"></h3>
      <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <div className="thumbnail">
                <div className="caption">
                  <h5>
                    {props.mutual.length ? (
                      <span>{ bio.firstname } {bio.lastname} has {props.mutual.length} friends</span>
                    ) : (
                      <span>{ bio.firstname } {bio.lastname}</span>
                    )}
                  </h5>
                  <small>{ bio.self }</small>
                </div>
              </div>
              { friendButton }
            </div>
      </div>
    </div>
  );
};
