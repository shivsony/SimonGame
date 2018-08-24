import {
  SWITCH_CLICK,
  GAME_ON,
  USER_WON,
  ADD_TO_SEQUENCE,
  PLAY_WITH_SEQUENCE
} from '../reducer/SimonReducer';




function switchDeviceToggle() {
  return {
    type: SWITCH_CLICK
  }
}

function startGame() {
  return {
    type: GAME_ON
  }
}

function userWin(){
  return {
    type: USER_WON
  }
}

function addToSequence(number) {
  return {
    type: ADD_TO_SEQUENCE,
    payload: number
  }
}

function startPlaySequence() {
  return {
    type: PLAY_WITH_SEQUENCE
  }
}



export {
  switchDeviceToggle,
  userWin,
  startGame,
  addToSequence
}
