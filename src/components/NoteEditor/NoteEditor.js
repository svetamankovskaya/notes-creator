import React from 'react';
import classes from './NoteEditor.module.css';

const NoteEditor = (props) => {
  return (
    <div className={classes.noteEditor}>
      <div>Кнопка "создать заметку"</div>
      <div>{props.note.text}</div>
    </div>
  )
}

export default NoteEditor;