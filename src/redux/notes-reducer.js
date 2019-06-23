const SET_NOTES = 'SET_NOTES';
const CHOOSE_SELECTED_NOTE = 'CHOOSE_SELECTED_NOTE';
const UPDATE_SELECTED_NOTE = 'UPDATE_SELECTED_NOTE';
const UPDATE_SELECTED_NOTE_TITLE = 'UPDATE_SELECTED_NOTE_TITLE';
const UPDATE_SELECTED_NOTE_BODY = 'UPDATE_SELECTED_NOTE_BODY';
const ADD_NOTE_HASHTAGS = 'ADD_NOTE_HASHTAGS';

let initialState = {
    notes: [{ title: 'initial', text: 'initial text', hashtags: ['123', '223'], id: 0 }],
    selectedNote: {}
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTES:
            return {
                ...state,
                notes: action.notes
            }
        case CHOOSE_SELECTED_NOTE:
            return {
                ...state,
                selectedNote: action.selectedNote
            }
        case UPDATE_SELECTED_NOTE:
            return {
                ...state,
                selectedNote: action.note
            }
        case UPDATE_SELECTED_NOTE_TITLE: {
            return {
                ...state,
                selectedNote: { ...state.selectedNote, title: action.changedTitle }
            }
        }
        case UPDATE_SELECTED_NOTE_BODY: {
            return {
                ...state,
                selectedNote: { ...state.selectedNote, text: action.changedNoteBody }
            }
        }
        case ADD_NOTE_HASHTAGS: {
            return {
                ...state,
                selectedNote: {...state.selectedNote, hashtags: action.hashtags }
            }
        }
        default:
            return state;
    }
}

export const setNotes = (notes) => ({ type: SET_NOTES, notes });
export const chooseSelectedNote = (selectedNote) => ({ type: CHOOSE_SELECTED_NOTE, selectedNote });
export const updateSelectedNote = (note) => ({type: UPDATE_SELECTED_NOTE, note});
export const updateSelectedNoteTitle = (changedTitle) => ({ type: UPDATE_SELECTED_NOTE_TITLE, changedTitle });
export const updateSelectedNoteBody = (changedNoteBody) => ({type: UPDATE_SELECTED_NOTE_BODY, changedNoteBody });
export const addNoteHashtags = (hashtags) => ({type: ADD_NOTE_HASHTAGS, hashtags })

export default notesReducer;