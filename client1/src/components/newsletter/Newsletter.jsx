import React from "react";
import { Send } from "@material-ui/icons";

import styles from "./newsletter.module.scss";

export default function Newsletter() {
  return (
    <div
      className={`${styles.newsletter} mt-4 d-flex justify-content-center align-items-center`}
    >
      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center`}
      >
        <h1
          className={`${styles.title} mb-3 d-flex justify-content-center align-items-center`}
        >
          Newsletter
        </h1>
        <div
          className={`${styles.desc} mb-3 d-flex justify-content-center align-items-center`}
        >
          Get timely updates from your favorite products.
        </div>
        <div
          className={`${styles.wrapperInput} d-flex justify-content-center align-items-center`}
        >
          <input
            className={`${styles.inputText}`}
            placeholder="Your email"
            type="text"
            name=""
            id=""
          />
          <button className={`${styles.inputBtn}`}>
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
}
