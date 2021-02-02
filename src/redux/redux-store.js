import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import userReducer from './userReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer

});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));




export default store;