import React from 'react';
import classes from './App.module.css';
import NoteEditorCreator from './components/NoteEditorCreator/NoteEditorCreator';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className={classes.appWrapper}>
      <Header />
      <Navigation />
      <NoteEditorCreator />
    </div>
    </BrowserRouter>
  );
}

export default App;
