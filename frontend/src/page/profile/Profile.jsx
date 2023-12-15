import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import PaymentIcon from "@mui/icons-material/Payment";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";

import styles from "./profile.module.scss";

export default function Profile() {
  return (
    <div className={`${styles.profile}`}>
      <div className="container">
        <div className={`${styles.directoryPage} mt-2`}>{">"} cart</div>
        <div className="row gx-3 mt-4">
          <div className="col-3">
            <div className={`${styles.sideBar}`}>
              <div
                className={`${styles.topSide} d-flex py-2 px-2 justify-content-start align-items-center`}
              >
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <img
                    className={`${styles.img}`}
                    src="https://i.ytimg.com/vi/W434H_cG-as/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgWAAtAFigIMCAAQARh_IB8oJDAP&rs=AOn4CLD3Pt-jCb9B2s0KACbQRNuEXQfC5w"
                    alt=""
                  />
                </div>
                <div className={`${styles.rightSide} col ms-1`}>
                  <div className={`${styles.label}`}>ACCOUNT OF</div>
                  <div className={`${styles.customerName}`}>Trần Gia Bảo</div>
                </div>
              </div>
              <div className={`${styles.bottomSide}`}>
                <div
                  className={`${styles.item} d-flex py-3 px-2 justify-content-start align-items-center`}
                >
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <AccountCircleOutlinedIcon className={`${styles.icon}`} />
                  </div>
                  <div className={`${styles.nameDirectory} col ms-1`}>
                    Account information
                  </div>
                </div>
                <div
                  className={`${styles.item} d-flex py-3 px-2 justify-content-start align-items-center`}
                >
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <NotificationsOutlinedIcon className={`${styles.icon}`} />
                  </div>
                  <div className={`${styles.nameDirectory} col ms-1`}>
                    My notice
                  </div>
                </div>
                <div
                  className={`${styles.item} d-flex py-3 px-2 justify-content-start align-items-center`}
                >
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <ListAltIcon className={`${styles.icon}`} />
                  </div>
                  <div className={`${styles.nameDirectory} col ms-1`}>
                    Order management
                  </div>
                </div>
                <div
                  className={`${styles.item} d-flex py-3 px-2 justify-content-start align-items-center`}
                >
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <PublishedWithChangesIcon className={`${styles.icon}`} />
                  </div>
                  <div className={`${styles.nameDirectory} col ms-1`}>
                    Return management
                  </div>
                </div>
                <div
                  className={`${styles.item} d-flex py-3 px-2 justify-content-start align-items-center`}
                >
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <PaymentIcon className={`${styles.icon}`} />
                  </div>
                  <div className={`${styles.nameDirectory} col ms-1`}>
                    Billing information
                  </div>
                </div>
                <div
                  className={`${styles.item} d-flex py-3 px-2 justify-content-start align-items-center`}
                >
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <RateReviewOutlinedIcon className={`${styles.icon}`} />
                  </div>
                  <div className={`${styles.nameDirectory} col ms-1`}>
                    Product reviews
                  </div>
                </div>
                <div
                  className={`${styles.item} d-flex py-3 px-2 justify-content-start align-items-center`}
                >
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <RemoveRedEyeOutlinedIcon className={`${styles.icon}`} />
                  </div>
                  <div className={`${styles.nameDirectory} col ms-1`}>
                    Products you viewed
                  </div>
                </div>
                <div
                  className={`${styles.item} d-flex py-3 px-2 justify-content-start align-items-center`}
                >
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FavoriteBorderOutlinedIcon className={`${styles.icon}`} />
                  </div>
                  <div className={`${styles.nameDirectory} col ms-1`}>
                    Favorite product
                  </div>
                </div>
                <div
                  className={`${styles.item} d-flex py-3 px-2 justify-content-start align-items-center`}
                >
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <HeadsetMicOutlinedIcon className={`${styles.icon}`} />
                  </div>
                  <div className={`${styles.nameDirectory} col ms-1`}>
                    Customer support
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`${styles.infoSide}`}>
              <div
                className={`${styles.namePage} d-flex justify-content-start align-items-center`}
              >
                Account information
              </div>
              <div className={`${styles.info}`}>
                <div className="row gx-3">
                  <div className="col-7">
                    <div className={`${styles.infoPersonal}`}>
                      <div className={`${styles.title} px-3 py-2`}>
                        PERSONAL INFORMATION
                      </div>
                      <div className={`${styles.content} p-3`}>
                        <div
                          className={`${styles.identification} col-12 d-flex`}
                        >
                          <div className="col-3 d-flex justify-content-start">
                            <img
                              className={`${styles.img}`}
                              src="https://i.ytimg.com/vi/BX7exLYSEy8/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AHOBYAC0AWKAgwIABABGBQgXSh_MA8=&rs=AOn4CLBSBkBlXysSJaU4YBT0L7SD-rA9Qw"
                              alt=""
                            />
                          </div>
                          <div className="col">
                            <div
                              className={`${styles.firstLastname} pb-4 d-flex justify-content-between`}
                            >
                              <div className="col-5 d-flex align-items-center">
                                <div className={`${styles.label}`}>
                                  First & Last name
                                </div>
                              </div>
                              <div className="col">
                                <input
                                  className={`${styles.input}`}
                                  type="text"
                                  name=""
                                  id=""
                                />
                              </div>
                            </div>
                            <div
                              className={`${styles.nickname} pb-5 d-flex justify-content-between`}
                            >
                              <div className="col-5 d-flex align-items-center">
                                <div className={`${styles.label}`}>
                                  Nickname
                                </div>
                              </div>
                              <div className="col">
                                <input
                                  className={`${styles.input}`}
                                  type="text"
                                  name=""
                                  id=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles.birthday} col-12 d-flex pb-5`}
                        >
                          <div className="col-3 d-flex align-items-center">
                            <div className={`${styles.label}`}>Birthday</div>
                          </div>
                          <div className="col d-flex">
                            <select className={`${styles.selectOption} me-3`}>
                              <option>Volvo</option>
                              <option>Saab</option>
                              <option>Opel</option>
                              <option>Audi</option>
                            </select>
                            <select className={`${styles.selectOption} me-3`}>
                              <option>Volvo</option>
                              <option>Saab</option>
                              <option>Opel</option>
                              <option>Audi</option>
                            </select>
                            <select className={`${styles.selectOption} me-3`}>
                              <option>Volvo</option>
                              <option>Saab</option>
                              <option>Opel</option>
                              <option>Audi</option>
                            </select>
                          </div>
                        </div>
                        <div className={`${styles.sex} col-12 d-flex pb-5`}>
                          <div className="col-3 d-flex align-items-center">
                            <div className={`${styles.label}`}>Sex</div>
                          </div>
                          <div className="col d-flex">
                            <div className="me-3 d-flex align-items-center">
                              <input
                                className={`${styles.selectOption} me-2`}
                                type="radio"
                                id=""
                                name="sex"
                                value=""
                              />
                              <div className={`${styles.label}`}>Male</div>
                            </div>
                            <div className="me-3 d-flex align-items-center">
                              <input
                                className={`${styles.selectOption} me-2`}
                                type="radio"
                                id=""
                                name="sex"
                                value=""
                              />
                              <div className={`${styles.label}`}>Femal</div>
                            </div>
                            <div className="me-3 d-flex align-items-center">
                              <input
                                className={`${styles.selectOption} me-2`}
                                type="radio"
                                id=""
                                name="sex"
                                value=""
                              />
                              <div className={`${styles.label}`}>Other</div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles.nationality} col-12 d-flex pb-5 `}
                        >
                          <div className="col-3 d-flex align-items-center">
                            <div className={`${styles.label}`}>Nationalit</div>
                          </div>
                          <div className="col d-flex">
                            <select className={`${styles.selectOption} me-3`}>
                              <option>Volvo</option>
                              <option>Saab</option>
                              <option>Opel</option>
                              <option>Audi</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 d-flex">
                          <div className="col-3"></div>
                          <div className="col">
                            <button className={`${styles.btn} me-3`}>
                              SAVE CHANGES
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className={`${styles.contact}`}>
                      <div className={`${styles.title} px-3 py-2`}>
                        PHONE NUMBER AND EMAIL
                      </div>
                      <div className={`${styles.content} p-3`}>
                        <div className={`${styles.item} d-flex pb-4`}>
                          <div className="col-5 d-flex">
                            <div className="col-2 d-flex">
                              <LocalPhoneOutlinedIcon
                                className={`${styles.icon}`}
                              />
                            </div>
                            <div className={`${styles.rightSide} col ms-1`}>
                              <div className={`${styles.label}`}>
                                Phone number
                              </div>
                              <div className={`${styles.infoCustomer}`}>
                                0869842372
                              </div>
                            </div>
                          </div>
                          <div className="col d-flex justify-content-end align-items-center">
                            <button className={`${styles.btn}`}>UPDATE</button>
                          </div>
                        </div>
                        <div className={`${styles.item} d-flex pb-4`}>
                          <div className="col-5 d-flex">
                            <div className="col-2 d-flex">
                              <EmailOutlinedIcon className={`${styles.icon}`} />
                            </div>
                            <div className={`${styles.rightSide} col ms-1`}>
                              <div className={`${styles.label}`}>
                                Email address
                              </div>
                              <div className={`${styles.infoCustomer}`}>
                                giabao7803@gmail.com
                              </div>
                            </div>
                          </div>
                          <div className="col d-flex justify-content-end align-items-center">
                            <button className={`${styles.btn}`}>UPDATE</button>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.title} px-3 py-2`}>
                        SECURITY
                      </div>
                      <div className={`${styles.content} p-3`}>
                        <div className={`${styles.item} d-flex pb-4 pt-1`}>
                          <div className="col-5 d-flex">
                            <div className="col-2 d-flex align-items-center">
                              <HttpsOutlinedIcon className={`${styles.icon}`} />
                            </div>
                            <div
                              className={`${styles.rightSide} col ms-1 d-flex align-items-center`}
                            >
                              <div className={`${styles.label}`}>
                                Set up password
                              </div>
                            </div>
                          </div>
                          <div className="col d-flex justify-content-end align-items-center">
                            <button className={`${styles.btn}`}>UPDATE</button>
                          </div>
                        </div>
                        <div className={`${styles.item} d-flex pb-4 pt-1`}>
                          <div className="col-5 d-flex">
                            <div className="col-2 d-flex align-items-center">
                              <GppGoodOutlinedIcon
                                className={`${styles.icon}`}
                              />
                            </div>
                            <div
                              className={`${styles.rightSide} col ms-1 d-flex align-items-center`}
                            >
                              <div className={`${styles.label}`}>
                                Set up a PIN
                              </div>
                            </div>
                          </div>
                          <div className="col d-flex justify-content-end align-items-center">
                            <button className={`${styles.btn}`}>UPDATE</button>
                          </div>
                        </div>
                      </div>

                      <div className={`${styles.title} px-3 py-2`}>
                        SOCIAL NETWORK LINK
                      </div>
                      <div className={`${styles.content} p-3`}>
                        <div className={`${styles.item} d-flex pb-4 pt-1`}>
                          <div className="col-5 d-flex">
                            <div className="col-2 d-flex align-items-center">
                              <FacebookOutlinedIcon
                                className={`${styles.icon}`}
                              />
                            </div>
                            <div
                              className={`${styles.rightSide} col ms-1 d-flex align-items-center`}
                            >
                              <div className={`${styles.label}`}>Facebook</div>
                            </div>
                          </div>
                          <div className="col d-flex justify-content-end align-items-center">
                            <button className={`${styles.btn}`}>
                              CONNECTIVE
                            </button>
                          </div>
                        </div>
                        <div className={`${styles.item} d-flex pb-4 pt-1`}>
                          <div className="col-5 d-flex">
                            <div className="col-2 d-flex align-items-center">
                              <GoogleIcon className={`${styles.icon}`} />
                            </div>
                            <div
                              className={`${styles.rightSide} col ms-1 d-flex align-items-center`}
                            >
                              <div className={`${styles.label}`}>Google</div>
                            </div>
                          </div>
                          <div className="col d-flex justify-content-end align-items-center">
                            <button className={`${styles.btn}`}>
                              CONNECTIVE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
