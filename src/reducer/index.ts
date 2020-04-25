import loggedReducer from './isLogged';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    // reducer goes here
    isLogged: loggedReducer,
});

export default rootReducer;