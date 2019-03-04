import React from 'react';
import NavButton from './NavButton';

function NavButtonBar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s4">
          <NavButton
            buttonName="Home" />
        </div>
        <div className="col s4">
          <NavButton
            buttonName="Notifications" />
        </div>
        <div className="col s4">
          <NavButton
            buttonName="Messages" />
        </div>
      </div>
    </div>
  );
}

export default NavButtonBar;