const SET_NOTE = 'SET_NOTE';


let initialState = {
    note: {}
}

export const noteEditorCreatorReducer = (state = initialState, action) => {
    switch(action.type){
        // case SET_NOTE:
        // return {
        //     ...state,
        //     note: action.note
        // }
        default:
            return state;
    }
}

export const setNote = (note) => ({type: SET_NOTE, note});

export default noteEditorCreatorReducer;