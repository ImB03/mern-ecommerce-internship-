import React from "react";

import styles from "./home.module.scss";
import Slider from "../../components/slider/Slider";
import Feature from "../../components/feature/Feature";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import A from "../../components/a/A";
import Saler from "../../components/saler/Saler";
import CustomerRate from "../../components/customerRate/CustomerRate";
import MoreDirectory from "../../components/moreDirectory/MoreDirectory";

export default function Home() {
  return (
    <div className={`${styles.home}`}>
      <Slider />
      <Feature />
      <Category />
      <Product />
      <A />
      <Saler />
      <CustomerRate />
      <MoreDirectory />
    </div>
  );
}
