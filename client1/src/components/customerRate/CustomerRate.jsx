import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCards,
} from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.css";

import styles from "./customerRate.module.scss";

export default function CustomerRate() {
  return (
    <div className={`${styles.customerRate} mt-4`}>
      <div className="container">
        <div className="row gx-5 align-items-start">
          <div className={`${styles.leftSide} col-7`}>
            <div className="row gx-3 align-items-center justify-content-around">
              <div className="col-5">
                <div className="row gy-5">
                  <div className="col-12">
                    <Swiper
                      className={`${styles.slider} col-12`}
                      modules={[EffectCards]}
                      effect={"cards"}
                      grabCursor={true}
                      // perSlideOffset={8}
                      // perSlideRotate={5}
                      rotate={true}
                      slideShadows={true}
                      // speed={2000}
                      // loop={true}
                      // autoplay={{ delay: 5000 }}
                    >
                      <SwiperSlide
                        className={`${styles.item} d-flex flex-column align-items-center justify-content-between`}
                      >
                        <img
                          className={`${styles.avatar}`}
                          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-sale-bannuer-design-template-38d8c87b5b44afb4906d2d55743a98ae_screen.jpg?ts=1698510904"
                          alt=""
                        />
                        <div className={`${styles.rated} mt-4 px-4`}>
                          "Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ratione itaque doloribus ad fuga natus dolorum
                          reiciendis, modi consequatur optio at autem!..."
                        </div>
                        <div
                          className={`${styles.name} mb-3 d-flex align-items-center justify-content-center`}
                        >
                          __ NAME __
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className={`${styles.item} d-flex flex-column align-items-center justify-content-between`}
                      >
                        <img
                          className={`${styles.avatar}`}
                          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-sale-bannuer-design-template-38d8c87b5b44afb4906d2d55743a98ae_screen.jpg?ts=1698510904"
                          alt=""
                        />
                        <div className={`${styles.rated} mt-4 px-4`}>
                          "Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ratione itaque doloribus ad fuga natus dolorum
                          reiciendis, modi consequatur optio at autem!..."
                        </div>
                        <div
                          className={`${styles.name} mb-3 d-flex align-items-center justify-content-center`}
                        >
                          __ NAME __
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className={`${styles.item} d-flex flex-column align-items-center justify-content-between`}
                      >
                        <img
                          className={`${styles.avatar}`}
                          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-sale-bannuer-design-template-38d8c87b5b44afb4906d2d55743a98ae_screen.jpg?ts=1698510904"
                          alt=""
                        />
                        <div className={`${styles.rated} mt-4 px-4`}>
                          "Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ratione itaque doloribus ad fuga natus dolorum
                          reiciendis, modi consequatur optio at autem!..."
                        </div>
                        <div
                          className={`${styles.name} mb-3 d-flex align-items-center justify-content-center`}
                        >
                          __ NAME __
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  <div className="col-12">
                    <Swiper
                      className={`${styles.slider} col-12`}
                      modules={[EffectCards]}
                      effect={"cards"}
                      grabCursor={true}
                      // perSlideOffset={8}
                      // perSlideRotate={5}
                      rotate={true}
                      slideShadows={true}
                      // loop={true}
                      // scrollbar={{ draggable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide
                        className={`${styles.item} d-flex flex-column align-items-center justify-content-between`}
                      >
                        <img
                          className={`${styles.avatar}`}
                          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-sale-bannuer-design-template-38d8c87b5b44afb4906d2d55743a98ae_screen.jpg?ts=1698510904"
                          alt=""
                        />
                        <div className={`${styles.rated} mt-4 px-4`}>
                          "Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ratione itaque doloribus ad fuga natus dolorum
                          reiciendis, modi consequatur optio at autem!..."
                        </div>
                        <div
                          className={`${styles.name} mb-3 d-flex align-items-center justify-content-center`}
                        >
                          __ NAME __
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className={`${styles.item} d-flex flex-column align-items-center justify-content-between`}
                      >
                        <img
                          className={`${styles.avatar}`}
                          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-sale-bannuer-design-template-38d8c87b5b44afb4906d2d55743a98ae_screen.jpg?ts=1698510904"
                          alt=""
                        />
                        <div className={`${styles.rated} mt-4 px-4`}>
                          "Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ratione itaque doloribus ad fuga natus dolorum
                          reiciendis, modi consequatur optio at autem!..."
                        </div>
                        <div
                          className={`${styles.name} mb-3 d-flex align-items-center justify-content-center`}
                        >
                          __ NAME __
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className={`${styles.item} d-flex flex-column align-items-center justify-content-between`}
                      >
                        <img
                          className={`${styles.avatar}`}
                          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-sale-bannuer-design-template-38d8c87b5b44afb4906d2d55743a98ae_screen.jpg?ts=1698510904"
                          alt=""
                        />
                        <div className={`${styles.rated} mt-4 px-4`}>
                          "Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ratione itaque doloribus ad fuga natus dolorum
                          reiciendis, modi consequatur optio at autem!..."
                        </div>
                        <div
                          className={`${styles.name} mb-3 d-flex align-items-center justify-content-center`}
                        >
                          __ NAME __
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <Swiper
                  className={`${styles.slider}`}
                  modules={[EffectCards]}
                  effect={"cards"}
                  grabCursor={true}
                  // perSlideOffset={8}
                  // perSlideRotate={5}
                  rotate={true}
                  slideShadows={true}
                  // loop={true}
                  // scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide
                    className={`${styles.item} d-flex flex-column align-items-center justify-content-between`}
                  >
                    <img
                      className={`${styles.avatar}`}
                      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-sale-bannuer-design-template-38d8c87b5b44afb4906d2d55743a98ae_screen.jpg?ts=1698510904"
                      alt=""
                    />
                    <div className={`${styles.rated} mt-4 px-4`}>
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ratione itaque doloribus ad fuga natus dolorum reiciendis,
                      modi consequatur optio at autem!..."
                    </div>
                    <div
                      className={`${styles.name} mb-3 d-flex align-items-center justify-content-center`}
                    >
                      __ NAME __
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className={`${styles.item} d-flex flex-column align-items-center justify-content-between`}
                  >
                    <img
                      className={`${styles.avatar}`}
                      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-sale-bannuer-design-template-38d8c87b5b44afb4906d2d55743a98ae_screen.jpg?ts=1698510904"
                      alt=""
                    />
                    <div className={`${styles.rated} mt-4 px-4`}>
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ratione itaque doloribus ad fuga natus dolorum reiciendis,
                      modi consequatur optio at autem!..."
                    </div>
                    <div
                      className={`${styles.name} mb-3 d-flex align-items-center justify-content-center`}
                    >
                      __ NAME __
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className={`${styles.item} d-flex flex-column align-items-center justify-content-between`}
                  >
                    <img
                      className={`${styles.avatar}`}
                      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-sale-bannuer-design-template-38d8c87b5b44afb4906d2d55743a98ae_screen.jpg?ts=1698510904"
                      alt=""
                    />
                    <div className={`${styles.rated} mt-4 px-4`}>
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ratione itaque doloribus ad fuga natus dolorum reiciendis,
                      modi consequatur optio at autem!..."
                    </div>
                    <div
                      className={`${styles.name} mb-3 d-flex align-items-center justify-content-center`}
                    >
                      __ NAME __
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className={`${styles.rightSide} col-5 mt-5`}>
            <div className={`${styles.wrapper} mt-4`}>
              <div className={`${styles.cap}`}>Testimoial</div>
              <h2 className={`${styles.title} mt-3`}>What Our Coustomer Say</h2>
              <p className={`${styles.desc} mt-4`}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonatia, there live the blind texts, Separated
                the live in Bookmarksgrove right.
              </p>
              <button className={`${styles.btn} mt-5`}>ABOUT US</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
