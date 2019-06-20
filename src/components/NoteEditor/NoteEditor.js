import React from 'react';
import classes from './NoteEditor.module.css';

const NoteEditor = (props) => {
  return (
    <div className={classes.noteEditor}>
      <div>
        <button className={classes.newNoteButton}>
          <span>Новая заметка</span>
        </button>
      </div>
      <div className={classes.noteWrapper}>
        <div className={classes.noteTitle}>{props.note.title}</div>
        <div className={classes.noteText}>{props.note.text}</div>
        <div className={classes.hashtags}>Hashtags</div>
      </div>

    </div>
  )
}

export default NoteEditor;