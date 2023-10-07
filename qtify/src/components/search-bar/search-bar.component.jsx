import { useState } from "react";

import "./search-bar.styles.css";

import { ReactComponent as SearchIcon } from "../../assets/search-icon/SearchIcon.svg";

const SearchBar = ({ searchString, setSearchString }) => {
  return (
    <div className="search-bar-container">
      <input
        onChange={(e) => setSearchString(e.target.value)}
        value={searchString}
        placeholder="Search a album of your choice"
      />
      <button type="button">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
