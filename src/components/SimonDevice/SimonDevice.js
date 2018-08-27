import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import {
   userWin,
   switchDeviceToggle,
   startGame,
   addToSequence,
   currentPlaying,
   increaseIndex,
   resetSimonIndex,
   strictModeToggle,
   stopPlaySequence,
 } from '../../actions/Actions'
import './SimonDevice.css';
import WinningMessage from '../WinningMessage/WinningMessage';
import ColorButton from '../ColorButton/ColorButton';
import NumberDisplay from '../NumberDisplay/NumberDisplay';
import StartButton from '../StartButton/StartButton';
import StrictButton from '../StrictButton/StrictButton';
import SimonOnOffButton from '../SimonOnOffButton/SimonOnOffButton';
import {
  CURRECT,
  NOTCURRECT,
  UNDECIDED
} from '../../reducer/SimonReducer';

const sounds = [
  { id: 1, src: 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', className: 'first' },
  { id: 2, src: 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3', className: 'second' },
  { id: 3, src: 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', className: 'third' },
  { id: 4, src: 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3', className: 'forth' },
].map((item) => {
  const { id, src, className } = item;
  return ({ id, className, audio: new Audio(src) });
});


const RandomNumber = () => Math.floor(Math.random()*sounds.length) + 1;

const TIMER_TIME = 500;
const STEP_TO_WIN = 20;

class SimonDevice extends React.Component {
    constructor(props){
      super(props);
      this.playSimonSequence = this.playSimonSequence.bind(this);
      this.stopPlay = this.stopPlay.bind(this);
      this.addToSequence = this.addToSequence.bind(this);
      this.lastSoundTimer = 0;
      this.playTimer = 0
      this.playNext = this.playNext.bind(this);
    }
    stopPlay() {
      this.props.resetSimonIndex();
      clearInterval(this.playTimer);
    }
    addToSequence() {
      this.props.addToSequence(RandomNumber());
    }
    playSimonSequence() {
      if(!this.props.isDeviceOn || this.props.hasUserWon ){
        return
      }
      this.stopPlay();
      if(!this.props.simonOrder.length){
        this.addToSequence()
      }
      clearTimeout(this.lastSoundTimer);
      this.playTimer = setInterval(this.playNext, TIMER_TIME);
    }
    playNext() {
      console.log('playnext');
      const findSound = sounds.find( (sound)=> ( sound.id === this.props.simonOrder[this.props.simonOrderIndex]));
      console.log(findSound);
      findSound.audio.currentTime = 0;
      findSound.audio.play();
      this.props.currentPlaying(findSound.id);
      this.props.increaseIndex();
      if(this.props.simonOrderIndex===this.props.simonOrder.length){
        this.stopSequence();
        this.lastSoundTimer = setTimeout(this.props.currentPlaying,TIMER_TIME);
      }
    }
    stopSequence() {
      console.log('stop sequence');
      this.props.resetSimonIndex();
      clearInterval(this.playTimer);
    }
    stopPlaySequence() {
      this.stopSequence();
      this.props.currentPlaying();
    }
    resetSequence() {
      this.stopPlaySequence();
      this.props.resetSequence();
    }
    playSequenceLog() {
      setTimeout(this.playSimonSequence,TIMER_TIME);
    }
    componentDidUpdate(preProps){
      if(preProps.isDeviceOn && !this.props.isDeviceOn){
        clearInterval(this.playTimer);
        this.props.resetSimonIndex();
        this.props.resetSequence();
        if(this.props.isStrictMode){
          this.props.strictModeToggle();
        }
        return
      }
      if(this.props.isCurrect=== NOTCURRECT){
        if(this.props.isStrictMode){
          this.props.resetSequence();
        }
        this.props.playSequenceLog();
      }
      if(this.props.isCurrect === CURRECT && this.props.simonOrder.length === this.props.sequenceOrder){
        if(this.props.simonOrder.length===STEP_TO_WIN){
          this.props.userWin();
          this.props.currentPlaying();
          return;
        }
        this.addToSequence();
        this.playSequenceLog();
      }
    }
    handleClickAction(soundId) {
      this.props.currentPlaying(soundId);
      this.props.repeatSequence(this.props.sequenceOrder + 1);
    }

    render(){
        return(
            <div className="App">
                <Header />
                <div className="simon-device-wraper">
                    <WinningMessage hasUserWon={this.props.hasUserWon}/>
                    <div className="simon-device">
                      <div className="simon-action-control">
                      <div className="simon-control-row">
                        <div className="simon-control-header">
                          <h1 className="simon-title">Simon<sup>&reg;</sup></h1>
                        </div>
                      </div>
                      <div className="simon-control-row">
                        <NumberDisplay count={this.props.simonOrder.length}/>
                        <StartButton onClickStartButton={this.playSimonSequence}/>
                        <StrictButton/>
                      </div>
                      <div className="simon-control-row">
                        <SimonOnOffButton
                          onHitDeviceOnOff={this.props.switchDeviceToggle}
                          isDeviceOn={this.props.isDeviceOn}
                        />
                      </div>
                    </div>
                    <div className="simon-sound-actions">
                      {
                        sounds.map(sound=> (<ColorButton
                            isPlable={
                              this.props.isDeviceOn &&
                              !this.props.isPlaying &&
                              this.props.simonOrder.length !== 0 &&
                              !this.props.hasUserWon
                            }
                            OnButtonClick={this.handleClickAction}
                            key={sound.id}
                            currentSoundId={this.props.currentSoundId}
                            soundId={sound.id}
                            audio={sound.audio}
                            className={sound.className}
                          />
                        ))}
                      }
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

SimonDevice.preProps = {
  isDeviceOn: PropTypes.bool.isRequired,
  userWin: PropTypes.func.isRequired,
  switchDeviceToggle: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  addToSequence: PropTypes.func.isRequired,
  currentPlaying: PropTypes.func.isRequired,
  increaseIndex: PropTypes.func.isRequired,
  resetSimonIndex: PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return {
    isDeviceOn: state.isDeviceOn,
    hasUserWon: state.hasUserWon,
    gameOn: state.gameOn,
    simonOrder: state.simonOrder,
    simonOrderIndex: state.simonOrderIndex,
    isStrictMode: state.isStrictMode,
    isCurrect: state.isCurrect,
    currentSoundId: state.currentSoundId,
    isPlaying: state.isPlaying,
    sequenceOrder: state.sequenceOrder,
  };
}

function mapDispatchToProps(dispatch){
  return {
    userWin: bindActionCreators(userWin , dispatch),
    switchDeviceToggle: bindActionCreators(switchDeviceToggle , dispatch),
    startGame: bindActionCreators(startGame,dispatch),
    addToSequence: bindActionCreators(addToSequence, dispatch),
    currentPlaying: bindActionCreators(currentPlaying, dispatch),
    increaseIndex: bindActionCreators(increaseIndex, dispatch),
    resetSimonIndex: bindActionCreators(resetSimonIndex,dispatch),
    strictModeToggle: bindActionCreators(strictModeToggle, dispatch),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SimonDevice);
