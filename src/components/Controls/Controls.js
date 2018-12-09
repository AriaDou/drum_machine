import React from 'react';
import './Controls.css';

const Controls = (props) => {
  return (
    <div id="controls">
      <div id="power" className="switch-container">
        Power
        <div className="switch-box" onClick={props.togglePower}>
          <div className={"switch " + (props.power ? "open" : "close")} />
        </div>
      </div>
      <div id="display">
        {props.display}
      </div>
      <div id="bank" className="switch-container">
        Bank
        <div className="switch-box" onClick={props.toggleBank}>
          <div className={"switch " + (props.bank ? "open" : "close")} />
        </div>
      </div>
    </div>
  );
}

export default Controls;
