import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./album-details-hero-section.styles.css";

import { ReactComponent as BackButton } from "../../assets/back-button/back-button.svg";
import { ReactComponent as Shuffle } from "../../assets/shuffle/shuffle.svg";
import { ReactComponent as Library } from "../../assets/library/library.svg";

const AlbumDetailsHero = ({ album }) => {
  const [albumStats, setAlbumStats] = useState({
    year: "",
    numberOfSongs: "",
    albumDurationInMin: "",
    albumDurationInSec: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (album.songs) {
      const year = 2000 + Math.floor(Math.random() * 20) + 4;
      const numberOfSongs = album.songs.length;
      const albumDuration = Math.floor(
        album.songs.reduce((acc, curr) => {
          acc += curr.durationInMs;
          return acc;
        }, 0) / 1000
      );
      const albumDurationInMin = Math.floor(albumDuration / 60);
      const albumDurationInSec = albumDuration % 60;
      setAlbumStats({
        year,
        numberOfSongs,
        albumDurationInMin,
        albumDurationInSec,
      });
    }
  }, [album]);

  const backToHomeHandler = () => navigate("/");
  return (
    <div className="album-details-hero-container">
      <div onClick={backToHomeHandler} className="back-button">
        <BackButton className="back-button-svg" />
      </div>
      <div className="album-details-hero">
        <div className="a-d-h-image">
          <img src={album.image} />
        </div>

        <div className="a-d-h-text">
          <span className="a-d-h-album-title">{album.title}</span>
          <span className="a-d-h-album-description">{album.description}</span>
          <span className="a-d-h-album-year">{albumStats.year}</span>
          <div className="a-d-h-album-stats">
            <span>{albumStats.numberOfSongs} songs</span>
            <div className="dot"></div>
            <span>
              {albumStats.albumDurationInMin} min{" "}
              {albumStats.albumDurationInSec} sec
            </span>
            <div className="dot"></div>
            <span>{album.follows} Follows</span>
          </div>
          <div className="a-d-h-album-buttons">
            <div className="a-d-h-album-button-left">
              <Shuffle />
              <span>Shuffle</span>
            </div>
            <div className="a-d-h-album-button-right">
              <Library />
              <span>Add to library</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailsHero;
