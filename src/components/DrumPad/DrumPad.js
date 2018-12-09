import React from 'react';
import './DrumPad.css';

const DrumPad = (props) => {
  return (
    <button
      className="drum-pad"
      id={props.id + '_button'}
      type="button"
      onClick={props.onClick}>
      {props.id}
      <audio
        className="clip"
        id={props.id}
        src={props.audioSrc} />
    </button>
  );
}

export default DrumPad;
