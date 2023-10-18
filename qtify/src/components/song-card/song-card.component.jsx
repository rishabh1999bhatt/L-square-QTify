import { useContext, Fragment } from "react";
import { useLocation } from "react-router-dom";

import { MusicPlayerContext } from "../../context/music-player.context";

import "./song-card.styles.css";

const SongCard = ({ song }) => {
  const { image, title, artists, durationInMs } = song;
  const seconds = Math.floor(durationInMs / 1000);
  const location = useLocation();
  const albumName = location.pathname
    .slice(location.pathname.lastIndexOf("/") + 1)
    .split("-")
    .join(" ");
  const { setSongInPlay, setIsVisible, setIsExpanded } =
    useContext(MusicPlayerContext);

  const setSongInPlayHandler = () => {
    setSongInPlay({
      songName: title,
      albumName: albumName,
      imageUrl: image,
      durationInSec: seconds,
    });
    setIsVisible(true);
    setIsExpanded(true);
  };

  return (
    <Fragment>
      <div onClick={setSongInPlayHandler} className="song-card-container">
        <div className="song-card-title">
          <div className="song-card-img">
            <img src={image} />
          </div>
          <span className="song-name">{title}</span>
        </div>
        <div className="song-card-artist">
          <span>{artists.toString().split(",").join(", ")}</span>
        </div>
        <div className="song-card-duration">
          <span>0:{seconds}</span>
        </div>
      </div>
      <div className="song-bottom-margin"></div>
    </Fragment>
  );
};

export default SongCard;
