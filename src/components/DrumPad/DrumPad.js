import React from 'react';
import './DrumPad.css';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.audioPlay = this.audioPlay.bind(this);
  }

  audioPlay(audio) {
    if (this.props.power) {
      audio.currentTime = 0;
      audio.play();
      this.props.displayName(this.props.name);
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

  render() {
    return (
      <button
        className="drum-pad"
        id={this.props.id + '_button'}
        type="button"
        onClick={this.handleClick}
        onMouseUp={this.handleMouseUp}>
        {this.props.id}
        <audio
          className="clip"
          id={this.props.id}
          src={this.props.audioSrc} />
      </button>
    )
  }
}

export default DrumPad;
