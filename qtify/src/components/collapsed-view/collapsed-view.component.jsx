import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./collapsed-view.styles.css";

import Card from "../card/card.component";

const CollapsedView = ({ albums }) => {
  return (
    <div className="cards-container-collapsed">
      <Swiper
        spaceBetween={32}
        slidesPerView={7}
        // loop={true}
        // autoplay={{
        //   delay: 500,
        //   disableOnInteraction: false,
        // }}
        // modules={[Autoplay]}
        className="mySwiper"
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id}>
            <Card album={album} />
          </SwiperSlide>
        ))}
        ;
      </Swiper>
    </div>
  );
};

export default CollapsedView;
