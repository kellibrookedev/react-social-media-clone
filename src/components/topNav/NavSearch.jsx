import React from 'react';

function NavSearch(props) {
  return (
      <form>
        <div className="input-field right">
          <input id="search" type="search" required />
          <label className="label-icon"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
  );
}

export default NavSearch;
