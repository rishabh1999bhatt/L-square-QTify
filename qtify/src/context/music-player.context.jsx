import { useState, useEffect, createContext } from "react";

export const MusicPlayerContext = createContext({
  isVisible: false,
  setIsVisible: () => {},
  isExpanded: false,
  setIsExpanded: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
  songInPlay: null,
  setSongInPlay: () => {},
});

export const MusicPlayerProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(null);
  const [songInPlay, setSongInPlay] = useState({
    songName: "",
    albumName: "",
    imageUrl: "",
    durationInSec: "",
  });
  const value = {
    isVisible,
    setIsVisible,
    isExpanded,
    setIsExpanded,
    isPlaying,
    setIsPlaying,
    songInPlay,
    setSongInPlay,
  };
  return (
    <MusicPlayerContext.Provider value={value}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
