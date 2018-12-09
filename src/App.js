import React, { Component } from 'react';
import './App.css';
import DrumPadList from './components/DrumPadList/DrumPadList';
import Controls from './components/Controls/Controls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      padListOne: [
        {
          id: 'Q',
          name: "Chord 1",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
        }, {
          id: 'W',
          name: "Chord 2",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
        }, {
          id: 'E',
          name: "Chord 3",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
        }, {
          id: 'A',
          name: "Shaker",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
        }, {
          id: 'S',
          name: "Open HH",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
        }, {
          id: 'D',
          name: 'Closed HH',
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
        }, {
          id: 'Z',
          name: 'Punchy Kick',
          audio: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
        }, {
          id: 'X',
          name: "Side Stick",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
        }, {
          id: 'C',
          name: "Snare",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
        }
      ],
      padListTwo: [
        {
          id: 'Q',
          name: "Heater Kit",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        }, {
          id: 'W',
          name: "Heater 2",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        }, {
          id: 'E',
          name: "Heater 3",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        }, {
          id: 'A',
          name: "Heater 4",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        }, {
          id: 'S',
          name: "Clap",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        }, {
          id: 'D',
          name: 'Open HH',
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        }, {
          id: 'Z',
          name: 'Kick n\' Hat',
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        }, {
          id: 'X',
          name: "Kick",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        }, {
          id: 'C',
          name: "Closed HH",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        }
      ],
      display: '',
      power: true,
      bank: true
    };
    this.displayName = this.displayName.bind(this);
    this.togglePower = this.togglePower.bind(this);
    this.toggleBank = this.toggleBank.bind(this);
  }

  displayName(name) {
    this.setState({
      display: name
    })
  }

  togglePower() {
    if (this.state.power) {
      this.setState({
        power: false,
        display: ''
      })
    } else {
      this.setState({
        power: true
      })
    }
  }

  toggleBank() {
    if (this.state.power) {
      if (this.state.bank) {
        this.setState({
          bank: false
        })
      } else {
        this.setState({
          bank: true
        })
      }
    }
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <DrumPadList
          pads={this.state.bank ? this.state.padListOne : this.state.padListTwo}
          power={this.state.power}
          displayName={this.displayName}/>
        <Controls
          display={this.state.display}
          power={this.state.power}
          bank={this.state.bank}
          togglePower={this.togglePower}
          toggleBank={this.toggleBank} />
      </div>
    );
  }
}

export default App;
