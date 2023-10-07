import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import "./feedback-modal.styles.css";

const defaultFormFields = {
  name: "",
  email: "",
  subject: "",
  description: "",
};

const FeedbackModal = ({ setIsPopupOpen }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, subject, description } = formFields;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handlePopupClose = () => {
    setIsPopupOpen((isPopupOpen) => !isPopupOpen);
  };

  return (
    <div className="overlay">
      <div className="feedback-modal-container">
        <header>
          <span className="feedback">Feedback</span>
          <span onClick={handlePopupClose} className="modal-icon-container">
            <CloseIcon className="modal-close-icon" />
          </span>
        </header>
        <form>
          <input
            onChange={handleInput}
            placeholder="Full name"
            name="name"
            value={name}
          />
          <input
            onChange={handleInput}
            placeholder="Email ID"
            name="email"
            value={email}
          />
          <input
            onChange={handleInput}
            placeholder="Subject"
            name="subject"
            value={subject}
          />
          <textarea
            className="input-description"
            onChange={handleInput}
            placeholder="Description"
            name="description"
            value={description}
          />
        </form>
        <button type="button" onClick={handlePopupClose}>
          <span>Submit Feedback</span>
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
