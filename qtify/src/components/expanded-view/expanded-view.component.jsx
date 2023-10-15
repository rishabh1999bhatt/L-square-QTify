import "./expanded-view.styles.css";

import Card from "../card/card.component";

const ExpandedView = ({ albums }) => {
  return (
    <div className="cards-container-expanded">
      {albums?.map((album) => (
        <Card key={album.id} album={album} />
      ))}
      ;
    </div>
  );
};

export default ExpandedView;
