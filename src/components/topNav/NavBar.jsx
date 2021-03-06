import React from 'react';
import NavButtonBar from './NavButtonBar';
import NavSearch from './NavSearch';

function NavBar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <NavButtonBar/>
      <NavSearch/>
    </div>
  </nav>
  );
}

export default NavBar;
