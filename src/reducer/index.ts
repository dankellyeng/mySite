import loggedReducer from './isLogged';

import { combineReducers } from 'redux';
import educationReducer from './eduIsActive';
import profileReducer from './profIsActive';
import skillsReducer from './skillsIsActive';


const rootReducer = combineReducers({
    // reducer goes here
    isLogged: loggedReducer,
    eduIsActive: educationReducer,
    skillsIsActive: skillsReducer,
    profIsActive: profileReducer,
});

export default rootReducer;