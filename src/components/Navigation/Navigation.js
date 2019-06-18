import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={classes.nav}>
        <div>Поиск</div>
        <div>Заметки список всех</div>
      </div>
  )
}

export default Navigation;