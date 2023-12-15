import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.css";

import styles from "./a.module.scss";
import "./a.css";
import { aData } from "./aData";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

export default function A() {
  return (
    <div className={`${styles.a} mt-4`}>
      <div className="container-fluid">
        <Swiper
          className={`${styles.slider} pb-5 d-flex align-items-center justify-content-center`}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={24}
          slidesPerView={4}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {aData.map((data) => (
            <SwiperSlide
              className={`${styles.item} d-flex flex-column justify-content-between align-items-center`}
            >
              <div
                className={`${styles.contact} position-relative d-flex justify-content-center align-items-center`}
              >
                <img className={`${styles.img}`} src={data.img} alt="" />
                <div
                  className={`${styles.icon} d-flex justify-content-center align-items-center position-absolute`}
                >
                  <div
                    className={`${styles.iconItem} m-2 d-flex justify-content-center align-items-center`}
                  >
                    <ShoppingCartOutlined />
                  </div>
                  <div
                    className={`${styles.iconItem} m-2 d-flex justify-content-center align-items-center`}
                  >
                    <SearchOutlined />
                  </div>
                  <div
                    className={`${styles.iconItem} m-2 d-flex justify-content-center align-items-center`}
                  >
                    <FavoriteBorderOutlined />
                  </div>
                </div>
              </div>
              <div className={`${styles.info} col-12 pt-2`}>
                <div
                  className={`${styles.nameAndPrice} d-flex justify-content-between align-items-center`}
                >
                  <div className={`${styles.name}`}>Men clother</div>
                  <div className={`${styles.price}`}>$45</div>
                </div>
                <div className={`${styles.category}`}>men</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
