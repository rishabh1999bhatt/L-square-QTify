import HeroSection from "../../components/hero-section/hero-section.component";
import AlbumSection from "../../components/album-section/album-section.component";
import SongsSection from "../../components/songs-section/songs-section.component";
import FAQAccordion from "../../components/faq-accordion/faq-accordion.component";
import MusicPlayer from "../../components/music-player/music-player.component";

const LandingPage = ({ topAlbums, newAlbums, songs, genres }) => {
  return (
    <div>
      <HeroSection />
      {topAlbums && <AlbumSection albums={topAlbums} albumsCategory="Top" />}
      {newAlbums && <AlbumSection albums={newAlbums} albumsCategory="New" />}
      {songs && <SongsSection songs={songs} genres={genres} category="Songs" />}
      <FAQAccordion />
    </div>
  );
};

export default LandingPage;
