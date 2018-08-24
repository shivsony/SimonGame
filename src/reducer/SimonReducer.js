const SWITCH_CLICK = 'SWITCH_CLICK';
const USER_WON = "USER_WON";
const GAME_ON = 'GAME_ON';
const ADD_TO_SEQUENCE = 'ADD_TO_SEQUENCE';
const PLAY_WITH_SEQUENCE = 'PLAY_WITH_SEQUENCE';
const CURRENT_PLAYING = 'CURRENT_PLAYING';
const INCREASE_INDEX = 'INCREASE_INDEX';
const RESET_SIMON_INDEX = 'RESET_SIMON_INDEX';
const RESET_SIMON_ORDER = 'RESET_SIMON_ORDER';
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
        case CURRENT_PLAYING:
            return Object.assign({},state, {currentSoundId: action.payload});
        case INCREASE_INDEX:
            return Object.assign({},state, {
                simonOrderIndex: state.simonOrderIndex + 1 
            });
        case RESET_SIMON_INDEX:
            return Object.assign({},state,{
                simonOrderIndex: 0,
                isPlaying: false
            });
        case RESET_SIMON_ORDER: 
            return Object.assign({}, state, {
                simonOrder: [],
                simonOrderIndex: 0,
                sequenceOrder: 0,
                isCurrect: UNDECIDED,
                hasUserWon: false
            })
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
  PLAY_WITH_SEQUENCE,
  CURRENT_PLAYING,
  INCREASE_INDEX,
  RESET_SIMON_INDEX,
  RESET_SIMON_ORDER,
}
