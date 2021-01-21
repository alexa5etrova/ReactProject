import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import userReducer from './userReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer

});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));




export default store;