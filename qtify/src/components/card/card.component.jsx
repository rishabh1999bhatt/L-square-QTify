import "./card.styles.css";

const Card = ({ album }) => {
  const { title, follows, image } = album;
  const followCount = Math.round(follows / 1000);

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-image">
          <img src={image} />
        </div>
        <div className="card-middle">
          <div className="card-followers">
            <span>{followCount}k Follows</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Card;
