/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

import styles from "./detailPage.module.scss";
import A from "../../components/a/A";

export default function detailPage() {
  const [changeContent, setChangeContent] = useState(true);

  return (
    <div className={`${styles.detailPage} mt-5`}>
      <div className="container">
        <div className="row gx-5 justify-content-between">
          <div className="col-6">
            <div className={`${styles.leftSide} row gx-3`}>
              <div className="col-3">
                <div className="row gy-3">
                  <div className="col-12">
                    <div className={`${styles.imgList}`}>
                      <img
                        className={`${styles.img}`}
                        src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ype8x0zkqbv239asgx9p/IMGWorldsofAdventureTicketinDubai.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className={`${styles.imgList}`}>
                      <img
                        className={`${styles.img}`}
                        src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ype8x0zkqbv239asgx9p/IMGWorldsofAdventureTicketinDubai.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className={`${styles.imgList}`}>
                      <img
                        className={`${styles.img}`}
                        src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ype8x0zkqbv239asgx9p/IMGWorldsofAdventureTicketinDubai.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className={`${styles.imgList}`}>
                      <img
                        className={`${styles.img}`}
                        src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ype8x0zkqbv239asgx9p/IMGWorldsofAdventureTicketinDubai.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-9 d-flex">
                <div className={`${styles.imgLarge}`}>
                  <img
                    className={`${styles.img}`}
                    src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ype8x0zkqbv239asgx9p/IMGWorldsofAdventureTicketinDubai.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex">
            <div
              className={`${styles.rightSide} col-12 d-flex flex-column justify-content-between`}
            >
              <div className={`${styles.productName}`}>Lorem ipsum</div>
              <div className={`${styles.rateStart}`}>*****</div>
              <div className={`${styles.price}`}>$50</div>
              <div className={`${styles.selectFeature} mt-4`}>
                <div className={`${styles.selectQuantity}`}>
                  <h6 className={`${styles.name}`}>Quantity</h6>
                  <div>-1+</div>
                </div>
                <div className={`${styles.selectSize}`}>
                  <h6 className={`${styles.name}`}>Select Size</h6>
                  <div
                    className={`${styles.items} d-flex mt-3 col-6 justify-content-start`}
                  >
                    <div
                      className={`${styles.item} d-flex justify-content-center align-items-center`}
                    >
                      S
                    </div>
                    <div
                      className={`${styles.item} d-flex justify-content-center align-items-center`}
                    >
                      M
                    </div>
                    <div
                      className={`${styles.item} d-flex justify-content-center align-items-center`}
                    >
                      L
                    </div>
                    <div
                      className={`${styles.item} d-flex justify-content-center align-items-center`}
                    >
                      XL
                    </div>
                    <div
                      className={`${styles.item} d-flex justify-content-center align-items-center`}
                    >
                      XXL
                    </div>
                  </div>
                </div>
                <div className={`${styles.selectColor} mt-3`}>
                  <h6 className={`${styles.name}`}>Select Color</h6>
                  <div
                    className={`${styles.items} d-flex mt-3 col-6 justify-content-start`}
                  >
                    <div
                      className={`${styles.item} d-flex justify-content-center align-items-center`}
                    ></div>
                    <div
                      className={`${styles.item} d-flex justify-content-center align-items-center`}
                    ></div>
                    <div
                      className={`${styles.item} d-flex justify-content-center align-items-center`}
                    ></div>
                    <div
                      className={`${styles.item} d-flex justify-content-center align-items-center`}
                    ></div>
                    <div
                      className={`${styles.item} d-flex justify-content-center align-items-center`}
                    ></div>
                  </div>
                </div>
              </div>
              <button className={`${styles.btn} mt-4`}>ADD TO CART</button>
              <div className={`${styles.category} mt-4`}>
                <b>Category:</b> Men, T-shirt
              </div>
              <div className={`${styles.tag}`}>
                <b>Tag:</b> Modern, Latest
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.infoProduct} mt-5`}>
          <div className={`${styles.selectName} d-flex justify-content-start`}>
            <div
              className={`${styles.name} ${
                changeContent && styles.active
              } d-flex justify-content-center align-items-center`}
              onClick={() => setChangeContent(!changeContent)}
            >
              Descriptions
            </div>
            <div
              className={`${styles.name} ${
                !changeContent && styles.active
              } d-flex justify-content-center align-items-center`}
              onClick={() => setChangeContent(!changeContent)}
            >
              Reviews(155)
            </div>
          </div>
          <div className={`${styles.content}`}>
            {changeContent ? (
              <div className={`${styles.descriptions} p-4`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                iste nobis vitae. Dolore voluptatibus officia omnis, ad, dolores
                et cupiditate quisquam atque eum itaque in ipsam optio velit a
                laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sint iste nobis vitae. Dolore voluptatibus officia omnis, ad,
                dolores et cupiditate quisquam atque eum itaque in ipsam optio
                velit a laborum.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sint iste nobis vitae. Dolore voluptatibus
                officia omnis, ad, dolores et cupiditate quisquam atque eum
                itaque in ipsam optio velit a laborum.
              </div>
            ) : (
              <div className={`${styles.reviews} p-4`}>jhjhjhj</div>
            )}
          </div>
        </div>
        <A />
      </div>
    </div>
  );
}
