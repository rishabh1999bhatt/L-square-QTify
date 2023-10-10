import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import "./album-details.styles.css";

import AlbumDetailsHero from "../../components/album-details-hero-section/album-details-hero-section.component";

const AlbumDetails = () => {
  const [album, setAlbum] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchAlbumSongs = async () => {
      try {
        const { data } = await axios.get(
          `https://qtify-backend-labs.crio.do/album/${slug}`
        );
        setAlbum(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchAlbumSongs();
  }, []);
  return (
    <div className="album-details-container">
      <AlbumDetailsHero album={album} />
    </div>
  );
};

export default AlbumDetails;
