import React from 'react';
import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';
import { updateSelectedNote } from '../../redux/notes-reducer';

class NoteEditorContainer extends React.Component {
    changeTitle = (changedTitle) => {
        this.props.updateSelectedNote(changedTitle);
    }

    render() {
        return <NoteEditor note={this.props.selectedNote}
            changeTitle={this.changeTitle} />
    }
}

let mapStateToProps = (state) => {
    return {
        notes: state.notesPage.notes,
        selectedNote: state.notesPage.selectedNote
    }
}

export default connect(mapStateToProps, { updateSelectedNote })(NoteEditorContainer);