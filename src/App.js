import React from 'react';
import classes from './App.module.css';
import NoteEditorCreator from './components/NoteEditorCreator/NoteEditorCreator';

const App = () => {
  return (
    <div className={classes.appWrapper}>
      <header className={classes.appHeader}>
          Заметки
      </header>
      <div className={classes.nav}>
        <div>Поиск</div>
        <div>Заметки список всех</div>
      </div>
     <NoteEditorCreator />
      </div>
  );
}

export default App;
