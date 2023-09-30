import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow/left-arrow.svg";

import "./swiper-left-navigation.styles.css";

const SwiperLeftNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-left-navigation">
      <LeftArrow onClick={() => swiper.slidePrev()} />
    </div>
  );
};
export default SwiperLeftNavigation;
