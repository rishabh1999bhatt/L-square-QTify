import "./card.styles.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-image">
          <img src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" />
        </div>
        <div className="card-middle">
          <div className="card-followers">
            <span>100M Follows</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <span>New Bollywood</span>
      </div>
    </div>
  );
};

export default Card;
