import React from 'react';

function StatusInput() {
  var inputButtonStyle = {
    float: 'right'
  }

  return (
    <div className="input-field">
      <textarea placeholder="What's on your mind?" className="materialize-textarea">
      </textarea>
      <a className="btn-floating btn-large waves-effect waves-light btn-small" style={inputButtonStyle}>
        <i className="material-icons">send</i>
      </a>
      <label>Post Here!</label>

    </div>
  );
}

export default StatusInput;
