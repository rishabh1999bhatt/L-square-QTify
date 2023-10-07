import "./search-results-container.styles.css";

import SearchCard from "../search-card/search-card.component";

const SearchResultsContainer = ({ filteredAlbums }) => {
  return (
    <div className="search-results-container-container">
      <div className="search-results-container">
        {filteredAlbums.length === 0 ? (
          <h4>No results found</h4>
        ) : (
          filteredAlbums.map((album) => <SearchCard album={album} />)
        )}
      </div>
    </div>
  );
};

export default SearchResultsContainer;