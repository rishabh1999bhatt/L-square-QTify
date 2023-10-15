import "./album-songs.styles.css";

import SongCard from "../song-card/song-card.component";

const AlbumSongs = ({ songs }) => {
  return (
    <div className="album-songs-container">
      <header>
        <div className="songs-list title">
          <span>Title</span>
        </div>
        <div className="songs-list artist">
          <span>Artist</span>
        </div>
        <div className="songs-list duration">
          <span>Duration</span>
        </div>
      </header>
      <div className="album-songs-list">
        {songs?.map((song) => {
          return <SongCard key={song.id} song={song} />;
        })}
      </div>
    </div>
  );
};
export default AlbumSongs;
