import React from 'react';
import classes from './NoteEditorCreator.module.css';

const NoteEditorCreator = (props) => {
  return (
    <div className={classes.noteEditor}>
      <div>Кнопка "создать заметку"</div>
      <div>{props.note.text}</div>
    </div>
  )
}

export default NoteEditorCreator;