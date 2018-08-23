
const USER_WON = "USER_WON"


const defaultState = {
    simonOrder: [],
    gameOn: false,
    simonOrderIndex: 0,
    hasUserWon: false
}
function SimonReducer(state=defaultState,action){
    switch (action.type) {
        case USER_WON:
            return Object.assign({},state,{hasUserWon:true});
            break;
        default:
            return state;
            break;
    }
}
export default SimonReducer

export {
  USER_WON
}
