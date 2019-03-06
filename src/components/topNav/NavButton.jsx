import React from 'react';
import PropTypes from 'prop-types';

function NavButton(props) {
  return (
    <div>
      <a className="waves-effect waves-light btn" href="{props.buttonURL}">{props.buttonName}</a>
    </div>
  );
}

NavButton.propTypes = {
  buttonName: PropTypes.string,
  buttonURL: PropTypes.string
};

export default NavButton;
