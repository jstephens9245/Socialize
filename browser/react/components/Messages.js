import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const messages = props.messages;
  console.log('props', props);

  return (
    <div>
      <h3 className="col-xs-10 col-xs-offset-1"></h3>
      <div className="row">
        {
          messages && messages.map(message => (
            <div className="col-xs-10" key={ message.id }>
              <Link to={`/messages/${message.id}`}>
                <div className="caption">
                  <p style={{color: 'white', paddingLeft: '.4em'}}>
                    <span>{ message.text }</span>
                  </p>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};
