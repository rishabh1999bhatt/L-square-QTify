import "./navbar.styles.css";

import { ReactComponent as QTifyLogo } from "../../assets/app-logo/app-logo.svg";
import SearchBar from "../search-bar/search-bar.component";
import Button from "../button/button.component";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="app-logo-container">
        <QTifyLogo />
      </div>
      <SearchBar />
      <Button />
    </div>
  );
};

export default Navbar;
