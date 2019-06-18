import React from 'react';
import classes from './App.module.css';
import NoteEditorCreator from './components/NoteEditorCreator/NoteEditorCreator';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <div className={classes.nav}>
        <div>Поиск</div>
        <div>Заметки список всех</div>
      </div>
     <NoteEditorCreator />
      </div>
  );
}

export default App;
