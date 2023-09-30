import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Card from "../card/card.component";
import SwiperLeftNavigation from "../swiper-left-navigation/swiper-left-navigation.component";
import SwiperRightNavigation from "../swiper-right-navigation/swiper-right-navigation.component";

import "./collapsed-view.styles.css";

const CollapsedView = ({ albums }) => {
  return (
    <div className="cards-container-collapsed">
      <Swiper spaceBetween={32} slidesPerView={7} className="mySwiper">
        {albums.map((album) => (
          <SwiperSlide key={album.id}>
            <Card album={album} />
          </SwiperSlide>
        ))}
        <SwiperLeftNavigation />
        <SwiperRightNavigation />
      </Swiper>
    </div>
  );
};

export default CollapsedView;
