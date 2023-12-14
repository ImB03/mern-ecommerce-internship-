import React from "react";

import styles from "./feature.module.scss";

export default function Feature() {
  return (
    <div className={`${styles.feature}`}>
      <div className="container">
        <div className="row flex-grap gx-5 d-flex justify-content-between">
          <div className="col-3 row">
            <div
              className={`${styles.featureItem} d-flex flex-column align-items-center`}
            >
              <img
                className={`${styles.icon}`}
                src={require("../../assets/img/shipping.png")}
                alt=""
              />
              <span className={`${styles.title} mt-3 mb-2`}>FREE SHIPPING</span>
              <span className={`${styles.description} text-center`}>
                Free worldwide shipping on all orders.
              </span>
            </div>
          </div>
          <div className="col-3 row">
            <div
              className={`${styles.featureItem} d-flex flex-column align-items-center`}
            >
              <img
                className={`${styles.icon}`}
                src={require("../../assets/img/return.png")}
                alt=""
              />
              <span className={`${styles.title} mt-3 mb-2`}>
                30 DAYS RETURN
              </span>
              <span className={`${styles.description} text-center`}>
                No question return and easy refund in 14 days.
              </span>
            </div>
          </div>
          <div className="col-3 row">
            <div
              className={`${styles.featureItem} d-flex flex-column align-items-center`}
            >
              <img
                className={`${styles.icon}`}
                src={require("../../assets/img/gift.png")}
                alt=""
              />
              <span className={`${styles.title} mt-3 mb-2`}>GIFT CARDS</span>
              <span className={`${styles.description} text-center`}>
                Buy gift cards and use coupon codes easily.
              </span>
            </div>
          </div>
          <div className="col-3 row">
            <div
              className={`${styles.featureItem} d-flex flex-column align-items-center`}
            >
              <img
                className={`${styles.icon}`}
                src={require("../../assets/img/contact.png")}
                alt=""
              />
              <span className={`${styles.title} mt-3 mb-2`}>CONTACT US!</span>
              <span className={`${styles.description} text-center`}>
                Keep in touch via email and support system.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
