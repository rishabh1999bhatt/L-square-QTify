import "./button.styles.css";

const Button = ({ setIsPopupOpen }) => {
  const handlePopupOpen = () => {
    setIsPopupOpen((isPopupOpen) => !isPopupOpen);
  };
  return (
    <div className="button-container">
      <button onClick={handlePopupOpen} type="button">
        Give Feedback
      </button>
    </div>
  );
};

export default Button;
