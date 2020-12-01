import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import userReducer from './userReducer';

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer

});


const store = createStore(reducers);




export default store;