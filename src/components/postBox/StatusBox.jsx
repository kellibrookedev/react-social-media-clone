import React from 'react';
import StatusIcon from './StatusIcon';
import StatusInput from './StatusInput';

function StatusBox() {
  var divStyle = {
    width: '100%',
    height: 'auto',
    padding: '5'
  }
  
  return (
    <div className="row card" style={divStyle}>
      <div className="col s2 card-image">
        <StatusIcon/>
      </div>
      <div className="col s10">
        <StatusInput/>
      </div>
    </div>
  );
}

export default StatusBox;
