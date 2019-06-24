import React from 'react';
import classes from './SearchButton.module.css';

const SearchButton = (props) => {
    let newFilterWord = React.createRef();

    let filterNotes = () => {
        let filterHashtag = `#${newFilterWord.current.value}`;
        props.filterNotes(filterHashtag);
    }

    return <div className={classes.searchWrapper}>
        <input className={classes.searchInput} type="text" ref={newFilterWord} />
        <div className={classes.searchButton} >
            <button onClick={() => { filterNotes(newFilterWord) }}></button>
        </div>
    </div>
}

export default SearchButton;