import React from 'react';
import {Link} from 'react-router';
import PostContainer from '../containers/PostContainer'
import PostFormContainer from '../containers/PostFormContainer'

export default function (props) {

 const posts = props.user.posts;
 const messages = props.user.messages;
 return (
   <div>
     <PostContainer posts={posts}/>
     <PostFormContainer />
   </div>
 );
};
