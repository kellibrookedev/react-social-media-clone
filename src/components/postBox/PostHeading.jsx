import React from 'react';
import PostIcon from './PostIcon';
import PostText from './PostText';

function PostHeading() {

  var divStyle = {
    width: '100%',
    height: 'auto',
    padding: '5'
  }
  return (
    <div className="row card" style={divStyle}>
      <div className="col s2 card-image">
        <PostIcon/>
      </div>
      <div className="col s10">
        <PostText/>
      </div>
    </div>
  );
}

export default PostHeading;
