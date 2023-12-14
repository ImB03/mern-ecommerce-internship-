import React from "react";
import { Link } from "react-router-dom";

import styles from "./productItem.module.scss";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

export default function ProductItem({ data }) {
  return (
    <Link
      className={`${styles.productItem} d-flex flex-column justify-content-between align-items-center`}
      to={`/detailproduct`}
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
    </Link>
  );
}
