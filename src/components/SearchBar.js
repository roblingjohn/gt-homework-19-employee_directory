import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <form id="searchBar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;