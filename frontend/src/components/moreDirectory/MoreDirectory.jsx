import React from "react";

import styles from "./moreDirectory.module.scss";
import { Link } from "react-router-dom";

export default function MoreDirectory() {
  return (
    <div className={`${styles.moreDirectory} mt-4`}>
      <div className="container d-flex flex-column align-items-center">
        <h1>More Directory</h1>
        <div
          className={`${styles.wrapper} row gx-5 col-12 mt-4 justify-content-between`}
        >
          <div className="col-4">
            <div
              className={`${styles.item} position-relative d-flex flex-column justify-content-center align-items-center`}
            >
              <img
                className={`${styles.img}`}
                src="https://vmagazine.com/wp-content/uploads/2019/03/TAILORING_033_v3.jpg"
                alt=""
              />
              <Link className={`${styles.directory} position-absolute`} to="/products">
                All Products
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div
              className={`${styles.item} position-relative d-flex flex-column justify-content-center align-items-center`}
            >
              <img
                className={`${styles.img}`}
                src="https://www.lyst.com/data/wp-content/uploads/sites/3/2023/04/q123-featured-img-uai-1565x1174.jpg"
                alt=""
              />
              <Link className={`${styles.directory} position-absolute`} to="/">
                About Us
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div
              className={`${styles.item} position-relative d-flex flex-column justify-content-center align-items-center`}
            >
              <img
                className={`${styles.img}`}
                src="https://www.sportsbusinessjournal.com/-/media/Images/Daily/2021/10/11/WNBA-fashion.ashx"
                alt=""
              />
              <Link className={`${styles.directory} position-absolute`} to="/">
                Journal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
