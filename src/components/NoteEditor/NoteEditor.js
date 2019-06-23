import React from 'react';
import classes from './NoteEditor.module.css';

const NoteEditor = (props) => {
  let newTitleElement = React.createRef();
  let newNoteBody = React.createRef();

  let onTitleChange = () => {
    let changedTitle = newTitleElement.current.value;
    props.changeTitle(changedTitle);
  }

  let onNoteBodyChange = () => {
    let changedNoteBody = newNoteBody.current.value;
    props.changeNoteBody(changedNoteBody);
  }

  let saveNote = () => {
    props.saveNote(props.note);
  }

  let deleteNote = () => {
    props.deleteNote(props.note);
  }

  let clearNoteInfo = () => {
    props.clearNoteInfo();
  }

  return (
    <div className={classes.noteEditor}>
      <div>
        <button className={classes.newNoteButton} onClick={clearNoteInfo}>
          <span>Новая заметка</span>
        </button>
      </div>
      <div className={classes.noteWrapper}>
        <div className={classes.noteTitle}>
          <button onClick={saveNote}>Save</button>
          <textarea onChange={onTitleChange} ref={newTitleElement} value={props.note.title} />
          <button onClick={deleteNote}>Delete</button>
        </div>
        <div className={classes.noteText}>
          <textarea onChange={onNoteBodyChange} ref={newNoteBody} value={props.note.text} />
        </div>
        <div className={classes.hashtags}>Hashtags</div>
      </div>

    </div>
  )
}

export default NoteEditor;