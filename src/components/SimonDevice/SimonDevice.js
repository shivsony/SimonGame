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
 } from '../../actions/Actions'
import './SimonDevice.css';
import WinningMessage from '../WinningMessage/WinningMessage';
import ColorButton from '../ColorButton/ColorButton';
import NumberDisplay from '../NumberDisplay/NumberDisplay';
import StartButton from '../StartButton/StartButton';
import StrictButton from '../StrictButton/StrictButton';
import SimonOnOffButton from '../SimonOnOffButton/SimonOnOffButton';

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

console.log(sounds);

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
      console.log('stop');
    }
    addToSequence() {
      this.props.addToSequence(RandomNumber());

    }
    playSimonSequence() {
      if(!this.props.isDeviceOn || this.props.hasUserWon ){
        return
      }
      this.stopPlay();
      console.log('readyToPlay');
      if(!this.props.simonOrder.length){
        this.addToSequence()
      }
      clearTimeout(this.lastSoundTimer);
      this.playTimer = setInterval(this.playNext, TIMER_TIME);
    }
    playNext() {
      console.log('playnext');
    }
    componentDidUpdate(preProps){
      // this.props.userWin();
      return
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
                        <NumberDisplay count={5}/>
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
                        sounds.map((items,i)=>{
                          return <ColorButton/>
                        })
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
}

function mapStateToProps(state){
  return {
    isDeviceOn: state.isDeviceOn,
    hasUserWon: state.hasUserWon,
    gameOn: state.gameOn,
    simonOrder: state.simonOrder,
  };
}

function mapDispatchToProps(dispatch){
  return {
    userWin: bindActionCreators(userWin , dispatch),
    switchDeviceToggle: bindActionCreators(switchDeviceToggle , dispatch),
    startGame: bindActionCreators(startGame,dispatch),
    addToSequence: bindActionCreators(addToSequence, dispatch),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SimonDevice);
