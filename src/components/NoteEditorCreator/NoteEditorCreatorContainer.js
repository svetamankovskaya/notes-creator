import React from 'react';
import { connect } from 'react-redux';
import NoteEditorCreator from './NoteEditorCreator';

class NoteEditorCreatorContainer extends React.Component {
    render() {
        return <NoteEditorCreator note={this.props.selectedNote} />
    }
}

let mapStateToProps = (state) => {
    return {
        selectedNote: state.notesPage.selectedNote
    }
}

export default connect(mapStateToProps)(NoteEditorCreatorContainer);