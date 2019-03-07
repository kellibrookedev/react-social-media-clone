import React from 'react';
import FriendDetailBox from './FriendDetailBox';

function FriendsBox() {

  return (
    <div className="card teal lighten-5">
        <div className="card-content">
          <span className="card-title">People You May Know</span>

            <FriendDetailBox/>
            <FriendDetailBox/>
            <FriendDetailBox/>
        </div>
      </div>
  );
}

export default FriendsBox;
