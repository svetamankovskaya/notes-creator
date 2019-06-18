import React from 'react';
import classes from './NoteEditorCreator.module.css';

const NoteEditorCreator = () => {
  return (
    <div className={classes.noteEditor}>
    <div>Поле добавления/редактирования заметки</div>
    <div>Кнопка "создать заметку"</div>
  </div>
  )
}

export default NoteEditorCreator;