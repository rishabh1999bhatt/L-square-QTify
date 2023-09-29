import { useState } from "react";

import "./grid-of-cards.styles.css";

import CollapsedView from "../collapsed-view/collapsed-view.component";
import ExpandedView from "../expanded-view/expanded-view.component";

const GridOfCards = ({ albums, albumsCategory }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleIsCollapsed = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="grid-container">
      <div className="header">
        <div className="album-category">{`${albumsCategory} Albums`}</div>
        <div className="collapse" onClick={toggleIsCollapsed}>{`${
          isCollapsed ? "Show all" : "Collapse"
        }`}</div>
      </div>
      {isCollapsed ? (
        <CollapsedView albums={albums} />
      ) : (
        <ExpandedView albums={albums} />
      )}
    </div>
  );
};
export default GridOfCards;
