import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setNotes, chooseSelectedNote } from '../../../redux/notes-reducer';
import Notes from './Notes';


class NotesContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:2000/notes`)
            .then(response => {
                this.props.setNotes(response.data.notes);
            });
    }

    onSelectedNoteChanged = (selectedNote) => {
        this.props.chooseSelectedNote(selectedNote);
    }

    render() {
        return <Notes notes={this.props.notes} onSelectedNoteChanged={this.onSelectedNoteChanged}/>
    }
}

let mapStateToProps = (state) => {
    return {
        notes: state.notesPage.notes,
    }
}


export default connect(mapStateToProps, { setNotes, chooseSelectedNote })(NotesContainer);