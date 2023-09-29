import { useState, useEffect } from "react";

import axios from "axios";

import Navbar from "./components/navbar/navbar.component";
import HeroSection from "./components/hero-section/hero-section.component";
import GridOfCards from "./components/grid-of-cards/grid-of-cards.component";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
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
  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <GridOfCards albums={topAlbums} albumsCategory="Top" />
      <GridOfCards albums={newAlbums} albumsCategory="New" />
    </div>
  );
};

export default App;
