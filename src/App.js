import React from 'react';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import NoteEditorContainer from './components/NoteEditor/NoteEditorContainer';

const App = () => {
  return (
    <BrowserRouter>
    <div className={classes.appWrapper}>
      <Header />
      <Navigation />
      <NoteEditorContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
