import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Card from "../card/card.component";
import SwiperLeftNavigation from "../swiper-left-navigation/swiper-left-navigation.component";
import SwiperRightNavigation from "../swiper-right-navigation/swiper-right-navigation.component";

import "./songs-section.styles.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const GENRE_TYPES = {
  0: "",
  1: "jazz",
  2: "rock",
  3: "pop",
  4: "blues",
};

const SongsSection = ({ songs, category, genres }) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [value, setValue] = React.useState(0);
  const [filteredSongs, setFilteredSongs] = useState(songs);

  useEffect(() => {
    const newFilteredSongs = songs.filter((song) =>
      song.genre.key.includes(selectedGenre)
    );
    setFilteredSongs(newFilteredSongs);
  }, [songs, selectedGenre]);

  const handleChange = (event, newValue) => {
    setSelectedGenre(GENRE_TYPES[newValue]);
    setValue(newValue);
  };

  return (
    <div className="grid-container">
      <div className="header">
        <div className="album-category">{category}</div>
      </div>
      <div className="tabs-container">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="basic tabs example"
        >
          {genres.map(({ label }, idx) => {
            // console.log(label);
            return (
              <Tab
                key={label}
                className="genre-tab"
                label={<span className="label-span">{label}</span>}
                {...a11yProps(idx)}
              />
            );
          })}
        </Tabs>
      </div>
      <div className="cards-container-collapsed">
        <Swiper spaceBetween={32} slidesPerView={7} className="mySwiper">
          {filteredSongs.map((song) => (
            <SwiperSlide key={song.id}>
              <Card song={song} />
            </SwiperSlide>
          ))}
          <SwiperLeftNavigation />
          <SwiperRightNavigation />
        </Swiper>
      </div>
    </div>
  );
};

export default SongsSection;
