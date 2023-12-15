import React, { useState } from "react";

import { sliderDatas } from "./SliderData";
import styles from "./slider.module.scss";

export default function Slider() {
  const [currentImg, setCurrentImg] = useState(1);
  const length = sliderDatas.length;

  const prevImg = () => {
    setCurrentImg(currentImg === 1 ? length : currentImg - 1);
  };
  const nextImg = () => {
    setCurrentImg(currentImg === length ? 1 : currentImg + 1);
  };

  return (
    <div className={`${styles.slider} position-relative d-flex`}>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div
          className={`${styles.arrowLeft} position-absolute d-flex justify-content-center align-items-center`}
          onClick={prevImg}
        >
          <i className="fa-solid fa-angles-left"></i>
        </div>
        <div
          className={`${styles.arrowRight} position-absolute d-flex justify-content-center align-items-center`}
          onClick={nextImg}
        >
          <i className="fa-solid fa-angles-right"></i>
        </div>

        {sliderDatas.map((dataSlider) => (
          <div
            className={`${styles.wrapperSlide} ${
              dataSlider.id !== currentImg && styles.noActive
            } ${
              dataSlider.id === currentImg && styles.active
            } position-absolute d-flex col-12 justify-content-around align-items-center`}
            key={dataSlider.id}
          >
            <div
              className={`col-5 d-flex justify-content-center align-items-center`}
            >
              <img
                className={`${styles.sliderImg} col`}
                src={dataSlider.img}
                alt=""
              />
            </div>
            <div className={`col-7 d-flex flex-column align-items-start`}>
              <div className={`${styles.sliderTitle}`}>{dataSlider.title}</div>
              <div className={`${styles.sliderDesc} mt-2`}>
                {dataSlider.desc}
              </div>
              <button className={`${styles.sliderBtn} mt-5`}>Show now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
