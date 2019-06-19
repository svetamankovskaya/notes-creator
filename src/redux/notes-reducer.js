const SET_NOTES = 'SET_NOTES';
const CHANGE_SELECTED_NOTE = 'CHANGE_SELECTED_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const ADD_NOTE = 'ADD_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';

let initialState = {
    notes: [],
    selectedNote: {}
}

export const notesReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_NOTES:
        return {
            ...state,
            notes: action.notes
        }
        case CHANGE_SELECTED_NOTE:
        return {
            ...state,
            selectedNote: action.selectedNote
        }
        default:
            return state;
    }
}

export const setNotes = (notes) => ({type: SET_NOTES, notes});
export const changeSelectedNote = (selectedNote) => ({type: CHANGE_SELECTED_NOTE, selectedNote});

export default notesReducer;