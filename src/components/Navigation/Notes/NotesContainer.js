import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setNotes, chooseSelectedNote } from '../../../redux/notes-reducer';
import Notes from './Notes';
import { settings } from '../../../settings';

class NotesContainer extends React.Component {
    componentDidMount() {
        axios.get(settings.notesUrl)
            .then(response => {
                this.props.setNotes(response.data.notes);
            });
    }

    onSelectedNoteChanged = (selectedNote) => {
        this.props.chooseSelectedNote(selectedNote);
    }

    render() {
        return <Notes notes={this.props.notes}
        selectedNote={this.props.selectedNote}
        onSelectedNoteChanged={this.onSelectedNoteChanged}/>
    }
}

let mapStateToProps = (state) => {
    return {
        notes: state.notesPage.notes,
        selectedNote: state.notesPage.selectedNote
    }
}


export default connect(mapStateToProps, { setNotes, chooseSelectedNote })(NotesContainer);