import React from 'react';

export default function (props) {

  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const inputValue = props.inputMessValue;

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={(event) => {handleSubmit(event, inputValue)}}>
        <fieldset>
          <legend>New Message</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Message</label>
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
                Create Message
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
