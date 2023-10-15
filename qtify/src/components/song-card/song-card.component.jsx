import { Fragment } from "react";
import "./song-card.styles.css";

const SongCard = ({ song }) => {
  const { image, title, artists, durationInMs } = song;
  const seconds = Math.floor(durationInMs / 1000);
  return (
    <Fragment>
      <div className="song-card-container">
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
