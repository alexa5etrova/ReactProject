import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer

});


const store = createStore(reducers);




export default store;