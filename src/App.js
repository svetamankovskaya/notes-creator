import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import NoteEditorCreatorContainer from './components/NoteEditorCreator/NoteEditorCreatorContainer';
import NoteEditorCreator from './components/NoteEditorCreator/NoteEditorCreator';

const App = () => {
  return (
    <BrowserRouter>
    <div className={classes.appWrapper}>
      <Header />
      <Navigation />
      <NoteEditorCreatorContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
