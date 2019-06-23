import React from 'react';

const SearchButton = (props) => {
    let newFilterWord = React.createRef();

    let filterNotes = () => {
        let filterHashtag = `#${newFilterWord.current.value}`;
        props.filterNotes(filterHashtag);
      }

    return <div>
        <input type="text" ref={newFilterWord}/>
        <button onClick={() => {filterNotes(newFilterWord) }}>Найти</button>
    </div>
}

export default SearchButton;