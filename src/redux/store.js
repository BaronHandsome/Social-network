import { combineReducers, createStore } from 'redux';
import { dialogsReducer, profileReducer } from '../components/index';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export let store = createStore(reducers);