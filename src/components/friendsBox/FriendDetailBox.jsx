import React from 'react';
import FriendPhoto from './FriendPhoto';
import FriendAddButton from './FriendAddButton';

function FriendDetailBox() {

  var divStyle = {
    width: '100%',
    height: 'auto',
    padding: '20px 5px'
  }

  return (
    <div className="row card" style={divStyle}>
      <div className="col s3 card-image">
        <FriendPhoto/>
      </div>
      <div className="col s9">
        <FriendAddButton/>
      </div>
    </div>
  );
}

export default FriendDetailBox;
