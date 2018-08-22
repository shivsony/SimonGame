
const defaultState = {
    simonOrder: [],
    gameOn: false,
    simonOrderIndex: 0
}
function SimonReducer(state=defaultState,action){
    switch (action.type) {
        case ' ':
            return action.payload + state
            break;
        default:
            return state;
            break;
    }
}
export default SimonReducer