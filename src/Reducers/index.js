import isLogedinReducer from "./isLogged";
import LecturerReducer from "./LecturerReducer";
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    isLogedinReducer,
    LecturerReducer
})

export default rootReducer;