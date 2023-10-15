import { useNavigate } from "react-router-dom";

import "./search-card.styles.css";

const SearchCard = ({ album, setSearchString }) => {
  const { title, image, follows, songs } = album;
  const artistsString = songs.reduce((acc, curr) => {
    acc += curr.artists[0];
    acc += ", ";
    return acc;
  }, "");

  const navigate = useNavigate();

  const handleNavigateToAlbumDetails = () => {
    setSearchString("");
    navigate(`/album-details/${album.slug}`);
  };

  return (
    <div
      onClick={handleNavigateToAlbumDetails}
      className="search-card-container"
    >
      <div className="s-card-image">
        <img src={image} />
      </div>
      <div className="s-card-details">
        <div className="s-card-details-left">
          <div className="s-card-details-left-top">{title}</div>
          <div className="s-card-details-left-bottom">
            <span>{artistsString}</span>
          </div>
        </div>
        <div className="s-card-details-right">{follows} Followers</div>
      </div>
    </div>
  );
};

export default SearchCard;
