import { useState, useEffect, Fragment } from "react";

import "./navbar.styles.css";

import { ReactComponent as QTifyLogo } from "../../assets/app-logo/app-logo.svg";
import SearchBar from "../search-bar/search-bar.component";
import Button from "../button/button.component";
import SearchResultsContainer from "../search-results-container/search-results-container.component";

const Navbar = ({ topAlbums, newAlbums }) => {
  const albums = [...topAlbums, ...newAlbums];
  const [searchString, setSearchString] = useState("");
  const [filteredAlbums, setFilteredAlbums] = useState();

  useEffect(() => {
    const newFilteredAlbums = albums.filter((album) =>
      album.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredAlbums(newFilteredAlbums);
  }, [searchString]);

  return (
    <Fragment>
      <div className="navbar-container">
        <div className="app-logo-container">
          <QTifyLogo />
        </div>
        <SearchBar
          searchString={searchString}
          setSearchString={setSearchString}
        />
        <Button />
      </div>
      {searchString && (
        <SearchResultsContainer filteredAlbums={filteredAlbums} />
      )}
    </Fragment>
  );
};

export default Navbar;
