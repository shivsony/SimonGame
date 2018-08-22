import { createStore } from 'redux';
import SimonReducer from './reducer/SimonReducer';

const store =  createStore(SimonReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store