import React from "react";

import styles from "./cart.module.scss";

export default function Cart() {
  return (
    <div className={`${styles.cart} mt-4`}>
      <div className="container">
        <div className={`${styles.title}`}>Your Cart</div>
        <div className={`${styles.directoryPage}`}>{">"} cart</div>
        <div className={`${styles.wrapper} mt-4 row gx-4`}>
          <div className="col-9">
            <div className={`${styles.productsList}`}>
              <div
                className={`${styles.header} d-flex justify-content-between`}
              >
                <div className="col-3 d-flex justify-content-center">
                  PRODUCT
                </div>
                <div className="col-2 d-flex justify-content-center">PRICE</div>
                <div className="col-2 d-flex justify-content-center">
                  FEATURE
                </div>
                <div className="col-2 d-flex justify-content-center">
                  QUANTITY
                </div>
                <div className="col-2 d-flex justify-content-center">
                  SUB TOTAL
                </div>
              </div>
              <div className={`${styles.products} mt-3`}>
                <div
                  className={`${styles.productItem} mb-2 py-2 d-flex justify-content-between`}
                >
                  <div className="col-3 d-flex justify-content-around align-items-center">
                    <img
                      className={`${styles.img}`}
                      src="http://localhost:3001/static/media/spfTwo.3dd358b9c31a7587b4d9.webp"
                      alt=""
                    />
                    <div className={`${styles.nameProduct}`}>Men shirt</div>
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    $100
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    black,XL
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    4
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    $100
                  </div>
                </div>
                <div
                  className={`${styles.productItem} mb-2 py-2 d-flex justify-content-between`}
                >
                  <div className="col-3 d-flex justify-content-around align-items-center">
                    <img
                      className={`${styles.img}`}
                      src="http://localhost:3001/static/media/spfTwo.3dd358b9c31a7587b4d9.webp"
                      alt=""
                    />
                    <div className={`${styles.nameProduct}`}>Men shirt</div>
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    $100
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    black,XL
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    4
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    $100
                  </div>
                </div>
                <div
                  className={`${styles.productItem} mb-2 py-2 d-flex justify-content-between`}
                >
                  <div className="col-3 d-flex justify-content-around align-items-center">
                    <img
                      className={`${styles.img}`}
                      src="http://localhost:3001/static/media/spfTwo.3dd358b9c31a7587b4d9.webp"
                      alt=""
                    />
                    <div className={`${styles.nameProduct}`}>Men shirt</div>
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    $100
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    black,XL
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    4
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    $100
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={`${styles.summary} p-4 border`}>
              <div className={`${styles.titleSummary} pb-4`}>ORDER SUMMARY</div>
              <div
                className={`${styles.itemSummary} pb-3 d-flex justify-content-between`}
              >
                <div className={`${styles.name}`}>SUBTOTAL</div>
                <div className={`${styles.price}`}>$180</div>
              </div>
              <div
                className={`${styles.itemSummary} pb-3 d-flex justify-content-between`}
              >
                <div className={`${styles.name}`}>SHIPPING CHARGE</div>
                <div className={`${styles.price}`}>$30</div>
              </div>
              <div
                className={`${styles.total} pb-3 d-flex justify-content-between`}
              >
                <div className={`${styles.name}`}>TOTAL</div>
                <div className={`${styles.price}`}>$210</div>
              </div>
              <div
                className={`${styles.itemSummary} pt-1 d-flex justify-content-center`}
              >
                <button className={`${styles.checkoutBtn}`}>CHECK OUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
