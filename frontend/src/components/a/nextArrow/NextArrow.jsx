import React from "react";

import styles from "./nextArrow.module.scss";

export default function NextArrow(props) {
  const { onClick } = props;

  return (
    <div onClick={onClick} className={`${styles.nextArrow} position-absolute`}>
      <i className="fa-solid fa-angles-right"></i>
    </div>
  );
}
