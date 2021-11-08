import React from 'react';
import './Search.css';

const Search = (props) => {
    return (
        <div className='search'>
            <input {...props} type="text" className='search__input' placeholder='Enter name to search'/>
            <button className='search__button'>search</button>
        </div>
    );
};

export default Search;