import React from "react";

import styles from "./announcement.module.scss";

export default function Announcement() {
  return <div className={`${styles.announcement} d-flex justify-content-center align-items-center`}>Super Deal! Free Shipping on Orders Over $50</div>;
}
