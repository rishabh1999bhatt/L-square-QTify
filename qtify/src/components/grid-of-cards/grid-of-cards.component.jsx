import "./grid-of-cards.styles.css";

import Card from "../card/card.component";

const GridOfCards = ({ albums, albumsCategory }) => {
  return (
    <div className="grid-container">
      <div className="header">
        <div className="album-category">{`${albumsCategory} Albums`}</div>
        <div className="collapse">Collapse</div>
      </div>
      <div className="cards-container">
        {albums.map((album) => (
          <Card key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};
export default GridOfCards;
