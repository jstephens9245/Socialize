import React from 'react';
import {Link} from 'react-router';
import PostsContainer from '../containers/PostsContainer'
import PostsFormContainer from '../containers/PostsFormContainer'

export default function (props) {

 const posts = props.user.posts;
 const messages = props.user.messages;
 return (
   <div>
     <PostsContainer posts={posts}/>
     <PostsFormContainer />
   </div>
 );
};
