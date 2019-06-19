import React from 'react';
import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';

class NoteEditorContainer extends React.Component {
    render() {
        return <NoteEditor note={this.props.selectedNote} />
    }
}

let mapStateToProps = (state) => {
    return {
        selectedNote: state.notesPage.selectedNote
    }
}

export default connect(mapStateToProps)(NoteEditorContainer);