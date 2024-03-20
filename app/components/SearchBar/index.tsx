import React from 'react';
import { StyledSearchBar } from './styles';

const SearchBar = () => {
    return (
        <StyledSearchBar>
            <input type="text" placeholder="SEARCH FOR TOPICS" />
            <div className="key-shortcut">
                <span>⌘-K</span>
            </div>
        </StyledSearchBar>
    );
};

export default SearchBar;
