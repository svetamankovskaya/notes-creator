import React from 'react';
import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';
import { updateSelectedNoteTitle, updateSelectedNoteBody } from '../../redux/notes-reducer';

class NoteEditorContainer extends React.Component {
    changeTitle = (changedTitle) => {
        this.props.updateSelectedNoteTitle(changedTitle);
    }

    changeNoteBody = (changedNoteBody) => {
        this.props.updateSelectedNoteBody(changedNoteBody)
    }

    render() {
        return <NoteEditor note={this.props.selectedNote}
            changeTitle={this.changeTitle}
            changeNoteBody={this.changeNoteBody} />
    }
}

let mapStateToProps = (state) => {
    return {
        notes: state.notesPage.notes,
        selectedNote: state.notesPage.selectedNote
    }
}

export default connect(mapStateToProps, { updateSelectedNoteTitle, updateSelectedNoteBody })(NoteEditorContainer);