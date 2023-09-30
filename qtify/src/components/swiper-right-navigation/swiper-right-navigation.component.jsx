import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../assets/right-arrow/right-arrow.svg";

import "./swiper-right-navigation.styles.css";

const SwiperRightNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-right-navigation">
      <RightArrow onClick={() => swiper.slideNext()} />
    </div>
  );
};
export default SwiperRightNavigation;
