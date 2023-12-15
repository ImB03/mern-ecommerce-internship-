import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import styles from "./product.module.scss";
import ProductItem from "./productItem/ProductItem";
import { popularProducts } from "./productData";

export default function Product() {
  return (
    <div className={`${styles.product}`}>
      <div className="container">
        <div className="row gx-5 gy-5 flex-wrap">
          {popularProducts.map((data) => (
            <div className="col-3">
              <ProductItem key={data.id} data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
