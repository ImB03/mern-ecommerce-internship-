import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.css";

import styles from "./saler.module.scss";

export default function Saler() {
  return (
    <div className={`${styles.saler} mt-4`}>
      <Swiper
        className={`${styles.slider}`}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        speed={2000}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 5000 }}

        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className={`${styles.item}`}>
          <img
            className={`${styles.img}`}
            src="https://watchard.com/media/weltpixel/owlcarouselslider/images/1/6/1600x533-slider-desktop-november-sale-23-watchard.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={`${styles.item}`}>
          <img
            className={`${styles.img}`}
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-sale-bannuer-design-template-38d8c87b5b44afb4906d2d55743a98ae_screen.jpg?ts=1698510904"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={`${styles.item}`}>
          <img
            className={`${styles.img}`}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/b9cebc56206093.59a527509701d.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
