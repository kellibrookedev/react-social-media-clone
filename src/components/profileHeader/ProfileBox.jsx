import React from 'react';
import BGPhoto from './BGPhoto';
import ProfilePhoto from './ProfilePhoto';

function ProfileBox() {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <BGPhoto/>
            <div className="row">
              <div className="col s4">
                <ProfilePhoto/>
              </div>
              <div className="col s8">
              Kelli Brooke
              </div>
            </div>
          </div>
          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
