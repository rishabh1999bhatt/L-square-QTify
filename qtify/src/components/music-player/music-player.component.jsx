import { useState, useEffect, useContext } from "react";

import "./music-player.styles.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { MusicPlayerContext } from "../../context/music-player.context";

import { ReactComponent as PlayButton } from "../../assets/play-button/play-button.svg";
import { ReactComponent as PauseButton } from "../../assets/pause-button/pause-button.svg";

const MusicPlayer = () => {
  const [songDurationPlayed, setSongDurationPlayed] = useState(0);
  const [songProgressInterval, setSongProgressInterval] = useState(null);

  const { isExpanded, setIsExpanded, isPlaying, setIsPlaying, songInPlay } =
    useContext(MusicPlayerContext);

  const { albumName, durationInSec, imageUrl, songName } = songInPlay;

  useEffect(() => {
    const increaseSongDurationPlayed = () => {
      const progressInterval = setInterval(() => {
        setSongDurationPlayed((prevState) => {
          if (prevState + 1 <= durationInSec) {
            return prevState + 1;
          } else {
            clearInterval(songProgressInterval);
            setSongDurationPlayed(0);
            setIsPlaying(false);
            return prevState;
          }
        });
      }, 1000);
      setSongProgressInterval(progressInterval);
    };
    if (isPlaying) {
      increaseSongDurationPlayed();
    } else {
      clearInterval(songProgressInterval);
    }
  }, [isPlaying]);

  useEffect(() => {
    const resetSongDurationPlayedStats = () => {
      setIsPlaying(true);
      setSongDurationPlayed(0);
    };
    if (songName !== "") {
      resetSongDurationPlayedStats();
    }
  }, [songInPlay]);

  const toggleIsPlaying = () => {
    if (songName !== "") {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleIsExpandedHandler = () => setIsExpanded(!isExpanded);
  return (
    <div
      className={`music-player-container ${
        isExpanded
          ? "music-player-container-expanded"
          : "music-player-container-collapsed"
      }`}
    >
      <div className="music-player-logo">
        <div className="m-p-logo-left">
          <img src={imageUrl} />
        </div>
        <div className="m-p-logo-right">
          <span>{songName}</span>
          <span>{albumName}</span>
        </div>
      </div>
      <div className="music-player-controls">
        <div className="pause-play-button" onClick={toggleIsPlaying}>
          {isPlaying ? <PauseButton /> : <PlayButton />}
        </div>
        <div className="music-progress">
          <div className="time-spared">
            0:
            {songDurationPlayed < 10
              ? `0${songDurationPlayed}`
              : songDurationPlayed}
          </div>
          <div className="time-progress">
            <div
              style={{
                width: `${(songDurationPlayed / durationInSec) * 100 * 6.76}px`,
              }}
              className="time-progress-indicator"
            ></div>
          </div>
          <div className="time-total">
            0:{durationInSec < 10 ? `0${durationInSec}` : durationInSec}
          </div>
        </div>
      </div>
      <div
        onClick={toggleIsExpandedHandler}
        className={`music-player-visibility-icons ${
          !isExpanded ? "icon-collapsed-fix" : ""
        }`}
      >
        {isExpanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </div>
    </div>
  );
};

export default MusicPlayer;
