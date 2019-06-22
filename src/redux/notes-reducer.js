const SET_NOTES = 'SET_NOTES';
const CHOOSE_SELECTED_NOTE = 'CHOOSE_SELECTED_NOTE';
const UPDATE_SELECTED_NOTE = 'UPDATE_SELECTED_NOTE';

let initialState = {
    notes: [{ title: 'initial', text: 'initial text', id: 0 }],
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
        case UPDATE_SELECTED_NOTE: {
            return {
                ...state,
                selectedNote: { ...state.selectedNote, title: action.changedTitle }
            }
        }
        default:
            return state;
    }
}

export const setNotes = (notes) => ({ type: SET_NOTES, notes });
export const chooseSelectedNote = (selectedNote) => ({ type: CHOOSE_SELECTED_NOTE, selectedNote });
export const updateSelectedNote = (changedTitle) => ({ type: UPDATE_SELECTED_NOTE, changedTitle });

export default notesReducer;