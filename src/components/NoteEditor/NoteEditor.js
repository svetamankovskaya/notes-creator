import React from 'react';
import classes from './NoteEditor.module.css';

const NoteEditor = (props) => {
  let newTitleElement = React.createRef();

  let onTitleChange = () => {
    let changedTitle = newTitleElement.current.value;
    props.changeTitle(changedTitle);
  }
  return (
    
    <div className={classes.noteEditor}>
      <div>
        <button className={classes.newNoteButton}>
          <span>Новая заметка</span>
        </button>
      </div>
      <div className={classes.noteWrapper}>
        <div className={classes.noteTitle}>
        <textarea onChange = {onTitleChange} ref={newTitleElement} value={props.note.title} />
        </div>
        <div className={classes.noteText}>
        <textarea value={props.note.text} />
        </div>
        <div className={classes.hashtags}>Hashtags</div>
      </div>

    </div>
  )
}

export default NoteEditor;