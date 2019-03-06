import React from 'react';
import NavButton from './NavButton';

function NavButtonBar() {
  return (
    <ul id="nav-mobile">
        <li>
          <NavButton
            buttonName="Home"
            buttonURL="#" />
        </li>
        <li>
          <NavButton
            buttonName="Notifications"
            buttonURL="#" />
        </li>
        <li>
          <NavButton
            buttonName="Messages"
            buttonURL="#" />
        </li>
      </ul>
  );
}

export default NavButtonBar;
