import React from 'react';
import classes from './Navigation.module.css';
import NotesContainer from './Notes/NotesContainer';

const Navigation = () => {
  return (
    <div className={classes.nav}>
        <div>Поиск</div>
        <NotesContainer />
      </div>
  )
}

export default Navigation;