import React from 'react';
import classes from './Notes.module.css';

let Notes = (props) => {
    let notesElements = props.notes.map(note => <div key={note.id}>{note.text}</div>)
    return <div>
        {notesElements}
    </div>
}

export default Notes;