import React from 'react';
import PropTypes from 'prop-types';

function NavButton(props) {
  return (
    <div>
      <a className="waves-effect waves-light btn">{props.buttonName}</a>
    </div>
  );
}

NavButton.propTypes = {
  buttonName: PropTypes.string
};

export default NavButton;
