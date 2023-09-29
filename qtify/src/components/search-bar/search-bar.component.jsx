import "./search-bar.styles.css";

import { ReactComponent as SearchIcon } from "../../assets/search-icon/SearchIcon.svg";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input placeholder="Search a album of your choice" />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
