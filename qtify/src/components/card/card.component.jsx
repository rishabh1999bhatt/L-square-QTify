import { useNavigate } from "react-router-dom";

import "./card.styles.css";
import Tooltip from "@mui/material/Tooltip";

const Card = ({ album, song }) => {
  const navigate = useNavigate();

  const handleNavigateToAlbumDetails = () =>
    navigate(`/album-details/${album.slug}`);

  return (
    <Tooltip
      title={`${album ? album["songs"].length + " songs" : ""}`}
      placement="top"
      arrow
    >
      <div
        className="card-container"
        onClick={album && handleNavigateToAlbumDetails}
      >
        <div className="card-content">
          <div className="card-image">
            {album ? <img src={album.image} /> : <img src={song.image} />}
          </div>
          <div className="card-middle">
            <div className="card-followers">
              {album ? (
                <span>{Math.round(album.follows / 1000)}k Follows</span>
              ) : (
                <span>{Math.round(song.likes / 1000)}k Likes</span>
              )}
            </div>
          </div>
        </div>
        <div className="card-footer">
          {album ? <span>{album.title}</span> : <span>{song.title}</span>}
        </div>
      </div>
    </Tooltip>
  );
};

export default Card;
