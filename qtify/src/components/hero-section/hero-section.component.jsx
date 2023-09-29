import "./hero-section.styles.css";

import { ReactComponent as HeroImage } from "../../assets/hero-image/vibrating-headphone 1.svg";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="hero-section">
        <div className="hero-text">
          <p className="text-top">100 Thousand Songs, ad-free</p>
          <p className="text-bottom">Over thousands podcast episodes</p>
        </div>
        <div className="hero-image">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
