import React from 'react';
import BGPhoto from './BGPhoto';
import ProfilePhoto from './ProfilePhoto';

function ProfileBox() {

  var profilePanelPosition = {
    position: 'relative',
    top: '-70 ',
    left: '-15',
    marginBottom: '-20'
  }

  var profileNameStyle = {
    position: 'relative',
    top: '60',
    fontSize: '3vw',
    fontWeight: '450',
    padding: '24 20 4 24',
    lineHeight: '.9'
  }

  return (
    <div>
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <BGPhoto/>
            </div>
            <div className="card-content row" style={profilePanelPosition}>
              <div className="col s5 card-image">
                <ProfilePhoto/>
              </div>
              <div className="col s7" style={profileNameStyle}>
                Kelli Brooke
              </div>
            </div>
            <div className="card-action">
              <a href="#">Following(20)</a>
              <a href="#">Followers(215)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
