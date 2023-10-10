import { useState, useEffect, Fragment } from "react";

import { Outlet } from "react-router-dom";

import "./navbar.styles.css";

import { ReactComponent as QTifyLogo } from "../../assets/app-logo/app-logo.svg";
import SearchBar from "../search-bar/search-bar.component";
import Button from "../button/button.component";
import SearchResultsContainer from "../search-results-container/search-results-container.component";
import FeedbackModal from "../feedback-modal/feedback-modal.component";

const Navbar = ({ topAlbums, newAlbums }) => {
  const albums = [...topAlbums, ...newAlbums];
  const [searchString, setSearchString] = useState("");
  const [filteredAlbums, setFilteredAlbums] = useState();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const newFilteredAlbums = albums.filter((album) =>
      album.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredAlbums(newFilteredAlbums);
  }, [searchString]);

  return (
    <Fragment>
      {isPopupOpen && <FeedbackModal setIsPopupOpen={setIsPopupOpen} />}
      <div className="navbar-container">
        <div className="app-logo-container">
          <QTifyLogo />
        </div>
        <SearchBar
          searchString={searchString}
          setSearchString={setSearchString}
        />
        <Button setIsPopupOpen={setIsPopupOpen} />
      </div>
      {searchString && (
        <SearchResultsContainer filteredAlbums={filteredAlbums} />
      )}
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
