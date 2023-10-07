import { useState, useEffect } from "react";

import axios from "axios";

import Navbar from "./components/navbar/navbar.component";
import HeroSection from "./components/hero-section/hero-section.component";
import AlbumSection from "./components/album-section/album-section.component";
import SongsSection from "./components/songs-section/songs-section.component";
import FAQAccordion from "./components/faq-accordion/faq-accordion.component";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

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
      <Navbar topAlbums={topAlbums} newAlbums={newAlbums} />
      <HeroSection />
      {topAlbums && <AlbumSection albums={topAlbums} albumsCategory="Top" />}
      {newAlbums && <AlbumSection albums={newAlbums} albumsCategory="New" />}
      {songs && <SongsSection songs={songs} genres={genres} category="Songs" />}
      <FAQAccordion />
    </div>
  );
};

export default App;
