import React from "react";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import styles from "./productsPage.module.scss";
import Product from "../../components/product/Product";
import { popularProducts } from "./productData";
import ProductItem from "../../components/product/productItem/ProductItem";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <div className={`${styles.productsPage} my-4`}>
      <div className="container">
        <div>
          <div className={`${styles.nameTitle}`}>Products</div>
          <div className={`${styles.directoryPage}`}>== shop</div>
        </div>
        <div className="mt-4 row gx-5 justify-content-between">
          <div className="col-3">
            <div className={`${styles.leftSide}`}>
              <div className={`${styles.wrapper}`}>
                <div className={`${styles.filterName}`}>Shop by Category</div>
                <div className={`${styles.item} pb-2 mt-4`}>New Arrivals</div>
                <div className={`${styles.item} pb-2 mt-3`}>Gudgets</div>
                <div className={`${styles.item} pb-2 mt-3`}>New Arrivals</div>
                <div className={`${styles.item} pb-2 mt-3`}>Electronics</div>
                <div className={`${styles.item} pb-2 mt-3`}>Others</div>
              </div>
              <div className={`${styles.wrapper} mt-4`}>
                <div className={`${styles.filterName} mb-3`}>Shop by Price</div>
                <div className={`${styles.item} pb-2 mt-4`}>$0.00 - $49.99</div>
                <div className={`${styles.item} pb-2 mt-3`}>
                  $50.00 - $99.99
                </div>
                <div className={`${styles.item} pb-2 mt-3`}>
                  $200.00 - $399.99
                </div>
                <div className={`${styles.item} pb-2 mt-3`}>
                  $400.00 - $599.99
                </div>
                <div className={`${styles.item} pb-2 mt-3`}>
                  $600.00 - $1000.00
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className={`${styles.rightSide}`}>
              <div className={`${styles.quantityItems} mt-2`}>
                6164 items found for "quần ống loe"
              </div>
              <div className="mt-2 d-flex justify-content-between">
                <div
                  className={`${styles.filter} col d-flex align-items-center`}
                >
                  <div
                    className={`${styles.filterSort} me-3 d-flex align-items-center`}
                  >
                    <div className={`${styles.label} me-2`}>Sort by:</div>
                    <select className={`${styles.select}`}>
                      <option className={`${styles.option}`}>Volvo</option>
                      <option className={`${styles.option}`}>Saab</option>
                      <option className={`${styles.option}`}>Fiat</option>
                      <option className={`${styles.option}`}>Audi</option>
                    </select>
                  </div>
                  <div
                    className={`${styles.changeQuantity} col d-flex align-items-center`}
                  >
                    <div className={`${styles.label} me-2`}>Show:</div>
                    <select className={`${styles.select}`}>
                      <option className={`${styles.option}`}>12</option>
                      <option className={`${styles.option}`}>24</option>
                      <option className={`${styles.option}`}>36</option>
                      <option className={`${styles.option}`}>48</option>
                    </select>
                  </div>
                </div>
                <div
                  className={`${styles.changeItemsDisplay} d-flex align-items-center`}
                >
                  <div
                    className={`${styles.wrapperIcon} me-3 d-flex align-items-center justify-content-center`}
                  >
                    <GridViewSharpIcon className={`${styles.icon}`} />
                  </div>
                  <div
                    className={`${styles.wrapperIcon} d-flex align-items-center justify-content-center`}
                  >
                    <FormatListBulletedIcon className={`${styles.icon}`} />
                  </div>
                </div>
              </div>
              <div className={`${styles.wrapperProducts} mt-4`}>
                <div className="row g-4 flex-wrap">
                  {popularProducts.map((data) => (
                    <div className="col-4">
                      <ProductItem key={data.id} data={data} />
                    </div>
                  ))}
                </div>
                {/* <div className="row g-4 flex-wrap">
                  <div className="col-12">
                    <Link
                      className={`${styles.productItem} py-2 px-4 d-flex`}
                      to={`/detailproduct`}
                    >
                      <div className={`${styles.wrapperImg} col-3 me-3`}>
                        <img
                          className={`${styles.img}`}
                          src="https://lzd-img-global.slatic.net/g/p/b95d17f7f559093fc332ff6378d3c4f4.jpg_400x400q75.jpg_.webp"
                          alt=""
                        />
                      </div>

                      <div className={`${styles.info} col pt-2`}>
                        <div className={`${styles.name}`}>Men clother</div>
                        <div className={`${styles.category}`}>men</div>
                        <div className={`${styles.price} mt-3`}>$45.00</div>
                      </div>

                      <div
                        className={`${styles.contact} col d-flex justify-content-end align-items-start`}
                      >
                        <div
                          className={`${styles.iconItem} me-2 d-flex justify-content-center align-items-center`}
                        >
                          <FavoriteBorderOutlined
                            className={`${styles.icon}`}
                          />
                        </div>
                        <div
                          className={`${styles.iconItem} d-flex justify-content-center align-items-center`}
                        >
                          <ShoppingCartOutlined className={`${styles.icon}`} />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
