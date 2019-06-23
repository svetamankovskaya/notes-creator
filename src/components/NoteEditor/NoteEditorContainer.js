import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';
import { setNotes, updateSelectedNoteTitle, updateSelectedNoteBody, updateSelectedNote, addNoteHashtags } from '../../redux/notes-reducer';

class NoteEditorContainer extends React.Component {
    changeTitle = (changedTitle) => {
        this.props.updateSelectedNoteTitle(changedTitle);
    }

    changeNoteBody = (changedNoteBody) => {
        this.props.updateSelectedNoteBody(changedNoteBody)
    }

    addNoteHashtags = (hashtags) => {
        this.props.addNoteHashtags(hashtags);
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

    deleteNote = (note) => {
        axios.delete(`http://localhost:2000/notes/${note.id}`)
        .then(() => {
            this.props.updateSelectedNote({title: '', text: ''});
            axios.get(`http://localhost:2000/notes`)
            .then(response => {
                this.props.setNotes(response.data.notes);
            })
        })
    }

    
    clearNoteInfo = () => {
        this.props.updateSelectedNote({title: '', text: ''});
    }

    render() {
        return <NoteEditor note={this.props.selectedNote}
            changeTitle={this.changeTitle}
            changeNoteBody={this.changeNoteBody}
            saveNote={this.saveNote}
            deleteNote={this.deleteNote}
            clearNoteInfo={this.clearNoteInfo}
            addNoteHashtags={this.addNoteHashtags} />
    }
}

let mapStateToProps = (state) => {
    return {
        notes: state.notesPage.notes,
        selectedNote: state.notesPage.selectedNote
    }
}

export default connect(mapStateToProps, { updateSelectedNoteTitle, updateSelectedNoteBody, setNotes, updateSelectedNote, addNoteHashtags })(NoteEditorContainer);