import React from 'react';
import NavBar from './topNav/Navbar';
import ProfileBox from './profileHeader/ProfileBox';
import PostBox from './postBox/PostBox';
import ProfileDetails from './profileDetails/ProfileDetails';
import FriendsBox from './friendsBox/FriendsBox';

function App() {
  return (
    <div>
        <div className="row">
          <div className="col s12">
            <NavBar/>
          </div>
        </div>
        <div className="row">
          <div className="col s4">
            <ProfileBox/>
            <ProfileDetails/>
          </div>
          <div className="col s5">
            <PostBox/>
          </div>
          <div className="col s3">
            <FriendsBox/>
          </div>

        </div>
      </div>
  );
}

export default App;
