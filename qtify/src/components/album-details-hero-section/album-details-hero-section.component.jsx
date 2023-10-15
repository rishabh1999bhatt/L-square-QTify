import { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./album-details-hero-section.styles.css";

import { ReactComponent as BackButton } from "../../assets/back-button/back-button.svg";
import { ReactComponent as Shuffle } from "../../assets/shuffle/shuffle.svg";
import { ReactComponent as Library } from "../../assets/library/library.svg";

import AlbumPagination from "../album-pagination/album-pagination.component";
import AlbumSongs from "../album-songs/album-songs.component";

const AlbumDetailsHero = ({ album }) => {
  const [albumStats, setAlbumStats] = useState({
    year: "",
    numberOfSongs: "",
    albumDurationInMin: "",
    albumDurationInSec: "",
    totalPages: null,
  });

  const songsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const startingSongIndex = (currentPage - 1) * songsPerPage;
  const endingSongIndex = startingSongIndex + songsPerPage - 1;

  // console.log(album.songs);

  const navigate = useNavigate();

  useEffect(() => {
    if (album.songs) {
      // getting total pages with respect to total number of songs
      const totalPages = Math.ceil(album.songs.length / songsPerPage);
      // setToTalPages(totalPages);
      // getting album stats
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
        totalPages,
      });
    }
  }, [album]);

  const backToHomeHandler = () => navigate(-1);
  return (
    <Fragment>
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

      <AlbumPagination
        totalPages={albumStats.totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <AlbumSongs
        songs={album?.songs?.slice(startingSongIndex, endingSongIndex + 1)}
      />
    </Fragment>
  );
};

export default AlbumDetailsHero;
