import React from 'react';
import classes from './Notes.module.css';

let Note = (props) => {
    return <div className={classes.noteWrapper}>
        <div>{props.note.text}</div>
        <div>{props.note.title}</div>
    </div>
}

let Notes = (props) => {
    let notesElements = props.notes.map(note => <Note key={note.id} note={note}/>)
    return <div>
        {notesElements}
    </div>
}

export default Notes;