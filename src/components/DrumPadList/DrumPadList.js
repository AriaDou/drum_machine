import React from 'react';
import DrumPad from '../DrumPad/DrumPad';
import './DrumPadList.css';

class DrumPadList extends React.Component {

  render() {
    const padList = this.props.pads.map(x => {
      return (
        <DrumPad
          id={x.id}
          key={x.id}
          name={x.name}
          audioSrc={this.props.power ? x.audio : "#"}
          displayName={this.props.displayName}
          power={this.props.power} />
      );
    })
    return (
      <div id="drum-pad-list">
        {padList}
      </div>
    );
  }
}

export default DrumPadList;
