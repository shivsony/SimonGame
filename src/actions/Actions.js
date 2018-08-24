import {
  SWITCH_CLICK,
  GAME_ON,
  USER_WON,
  ADD_TO_SEQUENCE,
  PLAY_WITH_SEQUENCE,
  CURRENT_PLAYING,
  INCREASE_INDEX,
  RESET_SIMON_INDEX,
  RESET_SIMON_ORDER
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

function currentPlaying(soundId=0) {
  return {
    type: CURRENT_PLAYING,
    payload: soundId
  }
}

function increaseIndex() {
  return {
    type: INCREASE_INDEX
  }
}

function resetSimonIndex() {
  return {
    type: RESET_SIMON_INDEX
  }
}

function resetSequence() {
  return {
    type: RESET_SIMON_ORDER
  }
}
export {
  switchDeviceToggle,
  userWin,
  startGame,
  addToSequence,
  currentPlaying,
  increaseIndex,
  resetSimonIndex,
  resetSequence
}
