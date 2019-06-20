import React from 'react';
import classes from './NoteEditor.module.css';

const NoteEditor = (props) => {
  return (
    <div className={classes.noteEditor}>
      <div>Кнопка "создать заметку"</div>
      <div className={classes.noteWrapper}>
      <div className={classes.noteTitle}>{props.note.title}</div> 
      <div className={classes.noteText}>{props.note.text}</div>
      <div className={classes.hashtags}>Hashtags</div>
      </div>
      
    </div>
  )
}

export default NoteEditor;