import React, { Component } from 'react';
import './App.css';
import DrumPadList from './components/DrumPadList/DrumPadList';
import Controls from './components/Controls/Controls';

const PADLISTONE = [
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
];
const PADLISTTWO = [
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
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      padList: PADLISTONE,
      display: '',
      power: true,
      bank: true
    };
    this.displayName = this.displayName.bind(this);
    this.togglePower = this.togglePower.bind(this);
    this.toggleBank = this.toggleBank.bind(this);
    this.audioPlay = this.audioPlay.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  displayName(name) {
    this.setState({
      display: name
    })
  }

  audioPlay(audio) {
    if (this.state.power) {
      audio.currentTime = 0;
      audio.play();
      const name = this.state.padList.filter(x => {
        return x.id === audio.id;
      })[0].name;
      this.displayName(name);
    }
    audio.parentNode.style.backgroundColor = "#A6642E";
    audio.parentNode.style.boxShadow = 'none';
    setTimeout(() => {
      audio.parentNode.removeAttribute('style')
    }, 250);
  }

  handleClick(event) {
    const audio = event.target.querySelector('audio');
    this.audioPlay(audio);
  }

  componentDidMount() {
    document.onkeypress = (event) => {
      const audio = document.getElementById(event.key.toUpperCase());
      if (audio) {
        this.audioPlay(audio);
      }
    }
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
          padList: PADLISTTWO,
          bank: false
        })
      } else {
        this.setState({
          padList: PADLISTONE,
          bank: true
        })
      }
    }
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <DrumPadList
          pads={this.state.padList}
          power={this.state.power}
          onClick={this.handleClick} />
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
