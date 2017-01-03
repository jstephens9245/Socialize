import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const post = props.selectedPost;
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const inputValue = props.inputValue;
  console.log('post props', props);

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={(event) => {handleSubmit(event, inputValue, post.id)}}>
        <fieldset>
          <legend>Update Post</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Post</label>
            <div className="col-xs-8">
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                value={inputValue}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-8 col-xs-offset-2">
              <button
                type="submit"
                className="btn btn-success"
                disabled={!inputValue}>
                Update Post
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>

  );
}
