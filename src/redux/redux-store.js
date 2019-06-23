import {createStore, combineReducers} from "redux";
import notesReducer from './notes-reducer';

let reducers = combineReducers({
    notesPage: notesReducer, 
    noteEditorCreatorPage: notesReducer
})

let store = createStore(reducers);
export default store;
window.store = store;