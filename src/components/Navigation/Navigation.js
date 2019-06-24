import React from 'react';
import classes from './Navigation.module.scss';
import NotesContainer from './Notes/NotesContainer';
import SearchButtonContainer from './SearchButton/SearchButtonContainer';

const Navigation = () => {
  return (
    <div className={classes.nav}>
        <SearchButtonContainer/>
        <NotesContainer />
      </div>
  )
}

export default Navigation;