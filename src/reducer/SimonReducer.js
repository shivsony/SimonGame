const SWITCH_CLICK = 'SWITCH_CLICK';
const USER_WON = "USER_WON";
const GAME_ON = 'GAME_ON';
const ADD_TO_SEQUENCE = 'ADD_TO_SEQUENCE'
const PLAY_WITH_SEQUENCE = 'PLAY_WITH_SEQUENCE'
const [UNDECIDED,CURRECT,NOTCURRECT] = ['UNDECIDED','CURRECT','NOTCURRECT'];
const defaultState = {
    isDeviceOn: false,
    simonOrder: [],
    gameOn: false,
    isPlaying: false,
    isCurrect: false,
    sequenceOrder: 0,
    simonOrderIndex: 0,
    currentSoundId: 0,
    hasUserWon: false
}
function SimonReducer(state=defaultState,action){
    switch (action.type) {
        case SWITCH_CLICK:
            return Object.assign({},state, {isDeviceOn: !state.isDeviceOn } );
        case GAME_ON:
            return Object.assign({}, state, {gameOn: true});
        case USER_WON:
            return Object.assign({},state, {hasUserWon: true});
        case ADD_TO_SEQUENCE:
            return Object.assign({},state,{simonOrder:[...state.simonOrder,action.payload]});
        case PLAY_WITH_SEQUENCE:
            return Object.assign({}, state , {
              isCurrect: UNDECIDED,
              isPlaying: true,
              sequenceOrder: 0,
              currentSoundId: 0
            });
        default:
            return state;
    }
}
export default SimonReducer

export {
  USER_WON,
  SWITCH_CLICK,
  GAME_ON,
  ADD_TO_SEQUENCE,
  PLAY_WITH_SEQUENCE
}
