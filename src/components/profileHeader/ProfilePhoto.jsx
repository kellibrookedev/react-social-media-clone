import React from 'react';
import profilePhoto from '../assets/images/profilePhoto.png';

function ProfilePhoto() {

  var profilePhotoStyle = {
    borderRadius: '10',
    boxShadow: '2px 1px 5px gray',
  }

  return (
    <img style={profilePhotoStyle} src={profilePhoto}/>
  );
}

export default ProfilePhoto;
