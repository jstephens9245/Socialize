import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const posts = props.posts;

  return (
    <div>
      <h3 className="col-xs-10 col-xs-offset-1">Posts</h3>
      <div className="row">
        {
          posts && posts.map(post => (
            <div className="col-xs-10 col-xs-offset-1" key={ post.id }>
              <Link className="thumbnail" to={`/posts/${post.id}`}>
                <div className="caption">
                  <p style={{fontSize: '1.6em'}}>
                    <span>{ post.post }</span>
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
