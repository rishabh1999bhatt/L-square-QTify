import { useState, useEffect, useContext } from "react";

import { Routes, Route } from "react-router-dom";

import axios from "axios";

import { MusicPlayerContext } from "./context/music-player.context";

import Navbar from "./components/navbar/navbar.component";
import LandingPage from "./routes/landing-page/landing-page.component";
import AlbumDetails from "./routes/album-details/album-details.component";
import MusicPlayer from "./components/music-player/music-player.component";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  const { isVisible } = useContext(MusicPlayerContext);

  const fetchTopAlbums = async () => {
    try {
      const { data } = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setTopAlbums(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchNewAlbums = async () => {
    try {
      const { data } = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      setNewAlbums(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSongs = async () => {
    try {
      const { data } = await axios.get(
        "https://qtify-backend-labs.crio.do/songs"
      );
      setSongs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGenres = async () => {
    try {
      const { data } = await axios.get(
        "https://qtify-backend-labs.crio.do/genres"
      );
      setGenres([{ key: "all", label: "All" }, ...data.data]);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
    fetchGenres();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Navbar topAlbums={topAlbums} newAlbums={newAlbums} />}
        >
          <Route
            index
            element={
              <LandingPage
                topAlbums={topAlbums}
                newAlbums={newAlbums}
                songs={songs}
                genres={genres}
              />
            }
          />

          <Route path="album-details/:slug" element={<AlbumDetails />} />
        </Route>
      </Routes>
      {isVisible && <MusicPlayer />}
    </div>
  );
};

export default App;
