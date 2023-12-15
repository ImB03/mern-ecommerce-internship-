import React from "react";

import styles from "./category.module.scss";

export default function Category() {
  return (
    <div className={`${styles.category}`}>
      <div className="container-fluid">
        <div className="row flex-wrap flex-column g-1">
          <div className="col">
            <div className="row flex-wrap g-1">
              <div className="col">
                <div className="">
                  <div className="row flex-wrap g-1">
                    <div className="col">
                      <div className="">
                        <div className="row flex-wrap flex-column g-1">
                          <div className="col">
                            <div
                              className={`${styles.categoryWatch} position-relative d-flex justify-content-center align-items-center`}
                            >
                              <img
                                className={`${styles.img}`}
                                src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/191:100/w_2580,c_limit/Garmin-Epix-Pro-Gear.jpg"
                                alt=""
                              />
                              <button
                                className={`${styles.btn} position-absolute`}
                              >
                                Watch
                              </button>
                            </div>
                          </div>
                          <div className="col">
                            <div
                              className={`${styles.categoryBag} position-relative  d-flex justify-content-center align-items-center`}
                            >
                              <img
                                className={`${styles.img}`}
                                src="https://media.karousell.com/media/photos/products/2022/5/31/new_timbuk2_messenger_bag_1653972493_e0daad4e_progressive.jpg"
                                alt=""
                              />
                              <button
                                className={`${styles.btn} position-absolute`}
                              >
                                Bag
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className={`${styles.categoryShirt} position-relative d-flex justify-content-center align-items-center`}
                      >
                        <img
                          className={`${styles.img}`}
                          src="https://static01.nyt.com/images/2013/09/22/magazine/22wmt/22wmt-superJumbo-v2.jpg"
                          alt=""
                        />
                        <button className={`${styles.btn} position-absolute`}>
                          Shirt
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="">
                  <div className="row flex-wrap flex-column g-1">
                    <div className="col">
                      <div className="">
                        <div className="row flex-wrap g-1">
                          <div className="col">
                            <div
                              className={`${styles.categoryHat} position-relative  d-flex justify-content-center align-items-center`}
                            >
                              <img
                                className={`${styles.img}`}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrOjSfUoyMbFl4vytWexwjrdLtWFxU90l-G3FyL-lRoMPJRv38LgSZSIQFPv0X_kCLHA&usqp=CAU"
                                alt=""
                              />
                              <button
                                className={`${styles.btn} position-absolute`}
                              >
                                Hat
                              </button>
                            </div>
                          </div>
                          <div className="col">
                            <div
                              className={`${styles.categoryGlasses} position-relative  d-flex justify-content-center align-items-center`}
                            >
                              <img
                                className={`${styles.img}`}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueLMdEm-xCUhJGB4shz-sMWAsJjdqHqaxxXDwqsdQ8cavSso6POLs55UNNKgfiBKHL8s&usqp=CAU"
                                alt=""
                              />
                              <button
                                className={`${styles.btn} position-absolute`}
                              >
                                Glasses
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className={`${styles.categoryJacket} position-relative  d-flex justify-content-center align-items-center`}
                      >
                        <img
                          className={`${styles.img}`}
                          src="https://assets.ajio.com/medias/sys_master/root/20230624/e4ea/649663cfeebac147fcf20d64/-473Wx593H-465324816-tan-MODEL.jpg"
                          alt=""
                        />
                        <button className={`${styles.btn} position-absolute`}>
                          Jacket
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row flex-wrap g-1">
              <div className="col">
                <div
                  className={`${styles.categoryBelt} position-relative  d-flex justify-content-center align-items-center`}
                >
                  <img
                    className={`${styles.img}`}
                    src="https://assets.hermes.com/is/image/hermesproduct/quentin-reversible-belt--054550CKAA-worn-1-0-0-800-800_g.jpg"
                    alt=""
                  />
                  <button className={`${styles.btn} position-absolute`}>
                    Belt
                  </button>
                </div>
              </div>

              <div className="col-6">
                <div
                  className={`${styles.categoryTrousers} position-relative  d-flex justify-content-center align-items-center`}
                >
                  <img
                    className={`${styles.img}`}
                    src="https://product.hstatic.net/1000370106/product/libe-milk_tea_brown_khaki_wide_leg_trousers15.1_851cca73f8ad4fedbc8d2a6700b81317_master.jpeg"
                    alt=""
                  />
                  <button className={`${styles.btn} position-absolute`}>
                    Trousers
                  </button>
                </div>
              </div>

              <div className="col">
                <div
                  className={`${styles.categoryShoes} position-relative  d-flex justify-content-center align-items-center`}
                >
                  <img
                    className={`${styles.img}`}
                    src="https://media.wired.com/photos/64949938065114c6bc3082ae/191:100/w_2580,c_limit/Hoka-Speedgoat-5-Angle-Gear.jpg"
                    alt=""
                  />
                  <button className={`${styles.btn} position-absolute`}>
                    Shoes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
