import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { userWin } from '../../actions/Actions'
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



class SimonDevice extends React.Component {
    constructor(props){
      super(props)
    }
    componentDidUpdate(preProps){
      this.props.userWin();
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
                        <NumberDisplay/>
                        <StartButton/>
                        <StrictButton/>
                      </div>
                      <div className="simon-control-row">
                        <SimonOnOffButton/>
                      </div>
                    </div>
                    <div className="simon-sound-actions">
                      <ColorButton/>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
  return {
    hasUserWon: state.hasUserWon
  };
}

function mapDispatchToProps(dispatch){
  return {
    userWin: bindActionCreators(userWin , dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SimonDevice);
