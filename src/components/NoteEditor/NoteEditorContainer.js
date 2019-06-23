import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';
import { setNotes, updateSelectedNoteTitle, updateSelectedNoteBody, updateSelectedNote } from '../../redux/notes-reducer';

class NoteEditorContainer extends React.Component {
    changeTitle = (changedTitle) => {
        this.props.updateSelectedNoteTitle(changedTitle);
    }

    changeNoteBody = (changedNoteBody) => {
        this.props.updateSelectedNoteBody(changedNoteBody)
    }

    saveNote = (note) => {
        axios.post(`http://localhost:2000/notes`, note)
        .then(response => {
            this.props.updateSelectedNote(response.data);
            axios.get(`http://localhost:2000/notes`)
            .then(response => {
                this.props.setNotes(response.data.notes);
            })
        })
        
    }

    render() {
        return <NoteEditor note={this.props.selectedNote}
            changeTitle={this.changeTitle}
            changeNoteBody={this.changeNoteBody}
            saveNote={this.saveNote} />
    }
}

let mapStateToProps = (state) => {
    return {
        notes: state.notesPage.notes,
        selectedNote: state.notesPage.selectedNote
    }
}

export default connect(mapStateToProps, { updateSelectedNoteTitle, updateSelectedNoteBody, setNotes, updateSelectedNote })(NoteEditorContainer);