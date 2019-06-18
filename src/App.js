import React from 'react';
import classes from './App.module.css';
import NoteEditorCreator from './components/NoteEditorCreator/NoteEditorCreator';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Navigation />
      <NoteEditorCreator />
    </div>
  );
}

export default App;
