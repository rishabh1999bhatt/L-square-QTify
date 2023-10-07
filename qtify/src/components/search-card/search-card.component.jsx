import "./search-card.styles.css";

const SearchCard = ({ album }) => {
  const { title, image, follows, songs } = album;
  let i = 1;
  let artistsString = songs.reduce((acc, curr) => {
    acc += curr.artists[0];
    acc += ", ";
    return acc;
  }, "");

  return (
    <div className="search-card-container">
      <div className="s-card-image">
        <img src={image} />
      </div>
      <div className="s-card-details">
        <div className="s-card-details-left">
          <div className="s-card-details-left-top">{title}</div>
          <div className="s-card-details-left-bottom">
            <span>{artistsString}</span>
          </div>
        </div>
        <div className="s-card-details-right">{follows} Followers</div>
      </div>
    </div>
  );
};

export default SearchCard;
