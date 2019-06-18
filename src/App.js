import React from 'react';
import classes from './App.module.css';

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
      <div className={classes.noteEditor}>
        <div>Поле добавления/редактирования заметки</div>
        <div>Кнопка "создать заметку"</div>
      </div>
      </div>
  );
}

export default App;
