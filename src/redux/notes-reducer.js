const SET_NOTES = 'SET_NOTES';
const DELETE_NOTE = 'DELETE_NOTE';
const ADD_NOTE = 'ADD_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';

let initialState = {
    notes: []
}

export const notesReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_NOTES:
        return {
            ...state,
            notes: action.notes
        }
        default:
            return state;
    }
}

export const setNotes = (notes) => ({type: SET_NOTES, notes});

export default notesReducer;