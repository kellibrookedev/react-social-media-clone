import React from 'react';

function NavButton(props) {
  return (
    <div>
      <a className="waves-effect waves-light btn">{props.buttonName}</a>
    </div>
  );
}

export default NavButton;