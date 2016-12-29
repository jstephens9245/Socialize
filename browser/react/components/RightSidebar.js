import React from 'react';
import {Link} from 'react-router';
import MessagesContainer from '../containers/MessagesContainer'
import MessagesFormContainer from '../containers/MessagesContainer'


export default function (props) {
  console.log(props);
  const messages = props.messages
  return (
    <sidebar className='rightFooter'>
      <section>
        <h4 className="menu-item">
          <Link to='#'>Messages</Link>
        </h4>
      </section>
      <hr />
      <MessagesContainer messages={messages}/>
    </sidebar>
  );
}
