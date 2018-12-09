import React from 'react';
import DrumPad from '../DrumPad/DrumPad';
import './DrumPadList.css';

const DrumPadList = (props) => {
  const padList = props.pads.map(x => {
    return (
      <DrumPad
        id={x.id}
        key={x.id}
        name={x.name}
        audioSrc={props.power ? x.audio : "#"}
        onClick={props.onClick} />
    );
  });
  return (
    <div id="drum-pad-list">
      {padList}
    </div>
  );
}

export default DrumPadList;
