import React from 'react';
import profilePhoto from '../assets/images/profilePhoto.png';

function StatusIcon() {
  var postIconStyle = {
    borderRadius: '10',
    boxShadow: '2px 1px 5px gray',
    width: '100%',
    height: 'auto'
  }

  return (
    <img style={postIconStyle} src={profilePhoto}/>
  );
}

export default StatusIcon;
