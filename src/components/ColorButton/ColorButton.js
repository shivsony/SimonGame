import React from 'react';
import './ColorButton.css';

class ColorButton extends React.Component {
  constructor(props){
    super(props);
    this.handlePlaySound = this.handlePlaySound.bind(this);
     this.isPlaying = this.isPlaying.bind(this);
  }
  handlePlaySound(e){
    if (!this.props.isPlayable) {
      e.preventDefault();
      return;
    }
    const { audio } = this.props;
    audio.currentTime = 0;
    audio.play();
    this.props.OnButtonClick(this.props.soundId);
  }
  addActiveClass() {
    return this.isPlaying() ? 'active' : '';
  }
  isPlaying() {
    return this.props.soundId === this.props.currentSoundId;
  }
  render() {
    return(
      <div className="simon-sound-button">
        <button onClick={this.handlePlaySound}
        className={`simon-button ${this.props.className} ${this.addActiveClass()}`}
        />
      </div>
  )}
}

export default ColorButton
