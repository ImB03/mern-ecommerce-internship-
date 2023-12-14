import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <div className={`container-fluid`}>
        <div className={`row gx-4 `}>
          <div className={`col-4`}>
            <h3 className={`${styles.footerLogoWeb}`}>WEBSHOP.</h3>
            <p className={`mt-3`}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable.
            </p>
            <div className={`d-flex mt-3`}>
              <div
                className={`${styles.socialIcon} ${styles.socialIconFacebook} me-3 d-flex justify-content-center align-items-center`}
              >
                <Facebook />
              </div>
              <div
                className={`${styles.socialIcon} ${styles.socialIconInstagram} me-3 d-flex justify-content-center align-items-center`}
              >
                <Instagram />
              </div>
              <div
                className={`${styles.socialIcon} ${styles.socialIconTwitter} me-3 d-flex justify-content-center align-items-center`}
              >
                <Twitter />
              </div>
              <div
                className={`${styles.socialIcon} ${styles.socialIconPinterest} me-3 d-flex justify-content-center align-items-center`}
              >
                <Pinterest />
              </div>
            </div>
          </div>
          <div className={`col-4 ps-5`}>
            <h3 className={`${styles.usefullLink}`}>Usefull Link</h3>
            <div className={`d-flex flex-wrap mt-4`}>
              <div className={`col-6 mb-2`}>Home</div>
              <div className={`col-6 mb-2`}>Cart</div>
              <div className={`col-6 mb-2`}>Man Fashion</div>
              <div className={`col-6 mb-2`}>Woman Fashion</div>
              <div className={`col-6 mb-2`}>Accessories</div>
              <div className={`col-6 mb-2`}>My Account</div>
              <div className={`col-6 mb-2`}>Order Tracking</div>
              <div className={`col-6 mb-2`}>Wishlist</div>
              <div className={`col-6 mb-2`}>Wishlist</div>
              <div className={`col-6 mb-2`}>Terms</div>
            </div>
          </div>
          <div className={`col-4 ps-5`}>
            <h3 className={`${styles.contact} mb-4`}>Contact</h3>
            <div className={`mt-3`}>
              <Room /> Tan Binh, HO CHI MINH
            </div>
            <div className={`mt-3`}>
              <Phone /> 0869842372
            </div>
            <div className={`mt-3`}>
              <MailOutline /> giabao7803@gmail.com
            </div>
            <div className={`mt-3`}>
              <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
