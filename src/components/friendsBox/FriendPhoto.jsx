import React from 'react';
import postPhoto from '../assets/images/postPhoto.png';

function FriendPhoto() {
  var friendPhotoStyle = {
    borderRadius: '10',
    boxShadow: '2px 1px 5px gray',
    width: '100%',
    height: 'auto'
  }

  return (
    <img style={friendPhotoStyle} src={postPhoto}/>
  );
}

export default FriendPhoto;
