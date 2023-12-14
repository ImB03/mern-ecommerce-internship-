import React from "react";

import styles from "./prevArrow.module.scss";

export default function PrevArrow(props) {
  const { onClick } = props;

  return (
    <div onClick={onClick} className={`${styles.prevArrow} position-absolute`}>
      <i className="fa-solid fa-angles-left"></i>
    </div>
  );
}
