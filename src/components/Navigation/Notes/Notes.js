import React from 'react';
import classes from './Notes.module.css';

let Note = (props) => {
    return <div className={classes.noteWrapper}
        onClick={() => { props.onSelectedNoteChanged(props.note) }}>
        <div>{props.note.title}</div>
        <div className={classes.hashtags}>{props.note.hashtags.map((hashtag, i) => <div key={i}>{hashtag}</div>)}</div>
    </div>
}

let Notes = (props) => {
    let notesElements = props.notes.map(note => <Note key={note.id} note={note} onSelectedNoteChanged={props.onSelectedNoteChanged} />)
    return <div>
        {notesElements}
    </div>
}

export default Notes;