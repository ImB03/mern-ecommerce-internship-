import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import styles from "./navbar.module.scss";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.persistedReducer.auth.user);

  return (
    <div className={`${styles.navbar} d-flex align-items-center`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="col d-flex justify-content-start align-items-center">
          <div
            className={`me-4 d-flex justify-content-center align-items-center`}
          >
            <ion-icon name="reorder-four-outline"></ion-icon>
            {/* <ion-icon name="close-outline"></ion-icon> */}
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <Link className={`${styles.logo} d-flex align-items-center`} to="/">
            WEBSHOP
          </Link>
        </div>
        <div className="col d-flex justify-content-end align-items-center">
          <div
            className={`${styles.iconSearch} d-flex justify-content-center align-items-center`}
            onClick={() => {}}
          >
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <div
            className={`ms-4 d-flex justify-content-center align-items-center`}
          >
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <Link
            to="/cart"
            className={`ms-4 d-flex justify-content-center align-items-center`}
          >
            <ion-icon name="bag-outline"></ion-icon>
          </Link>
          <Link
            className={`ms-4 d-flex justify-content-center align-items-center`}
            to="/profile"
          >
            <ion-icon name="person-outline"></ion-icon>
          </Link>
          {/* <div
            className={`ms-4 d-flex justify-content-center align-items-center`}
          >
            <img
              className={`${styles.userImg}`}
              src="https://jademcallistercom.files.wordpress.com/2016/05/instagram-icon.png"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
