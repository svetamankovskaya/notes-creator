import React from 'react';
import classes from './NoteEditor.module.scss';

const NoteEditor = (props) => {
  let newTitleElement = React.createRef();
  let newNoteBody = React.createRef();

  let onTitleChange = () => {
    let changedTitle = newTitleElement.current.value;
    props.changeTitle(changedTitle);
  }

  let onNoteBodyChange = () => {
    let changedNoteBody = newNoteBody.current.value;
    let arrStrings = changedNoteBody.split(' ').filter(string => string.startsWith('#'));
    let hashtags = getUnique(arrStrings);
    props.addNoteHashtags(hashtags);
    props.changeNoteBody(changedNoteBody);
  }

  let getUnique = (arr) => {
    var i = 0,
      current,
      length = arr.length,
      unique = [];
    for (; i < length; i++) {
      current = arr[i];
      if (!~unique.indexOf(current)) {
        unique.push(current);
      }
    }
    return unique;
  };

  let saveNote = () => {
    if(props.note.title&&props.note.text){
      props.saveNote(props.note);
    } else {
      alert('Введите название и текст заметки!')
    }
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
          <div className={classes.saveNoteButton}>
            <button onClick={saveNote}></button>
          </div>
          <textarea onChange={onTitleChange} ref={newTitleElement} value={props.note.title} placeholder="Название заметки" />
          <div className={classes.deleteNoteButton}>
            <button onClick={deleteNote}></button>
          </div>
        </div>

        <div className={classes.noteText}>
          <textarea onChange={onNoteBodyChange} ref={newNoteBody} value={props.note.text} placeholder="Введите текст заметки" />
        </div>
        <div className={classes.hashtags} >
          {props.note.hashtags ? props.note.hashtags.map((hashtag, i) => <div key={i}>{hashtag}</div>) : ''}
        </div>
      </div>

    </div>
  )
}

export default NoteEditor;