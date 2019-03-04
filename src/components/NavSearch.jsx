import React from 'react';

function NavSearch(props) {
  return (
    <div className="container">
      <form>
        <div className="input-field">
          <input id="search" type="search" required />
          <label className="label-icon"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  );
}

export default NavSearch;