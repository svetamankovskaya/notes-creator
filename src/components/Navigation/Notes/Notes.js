import React from 'react';
import classes from './Notes.module.css';

let Hashtag = (props) => {
    if (!props.note.hashtags) {
        return <div></div>
    } else {
        let hashtagsElements = props.note.hashtags.map((hashtag, i) => <div key={i}>{hashtag}</div>)
        return <div className={classes.hashtags}>
            {hashtagsElements}
        </div>
    }
}

let Note = (props) => {
    return <div className={classes.noteWrapper}
        onClick={() => { props.onSelectedNoteChanged(props.note) }}>
        <div>{props.note.title}</div>
        <div><Hashtag note={props.note} /></div>
    </div>
}

let Notes = (props) => {
    let notesElements = props.notes.map(note => <Note key={note.id} note={note} onSelectedNoteChanged={props.onSelectedNoteChanged} />)
    return <div>
        {notesElements}
    </div>
}

export default Notes;