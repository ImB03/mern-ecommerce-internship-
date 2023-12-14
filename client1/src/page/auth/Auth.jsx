import React, { useState } from "react";

import styles from "./auth.module.scss";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      className={`${styles.auth} d-flex justify-content-center align-items-center`}
    >
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div
          className={`${styles.wrapperSideRight} col-5 d-flex justify-content-center align-items-center`}
        >
          <div className={`${styles.sideRight} col d-flex flex-column`}>
            <h1
              className={`${styles.title} mb-3 d-flex justify-content-center`}
            >
              {isSignUp ? "Register" : "Login"}
            </h1>
            {isSignUp && (
              <input
                className={`${styles.input} mb-4 mt-2`}
                type="text"
                placeholder="Your name"
              />
            )}
            <input
              className={`${styles.input} mb-4 ${!isSignUp && "mt-2"}`}
              type="text"
              placeholder="Your email"
            />
            <input
              className={`${styles.input} mb-4`}
              type="password"
              placeholder="Your password"
            />

            <button className={`${styles.btn} mt-2`} onClick={null}>
              {isSignUp ? "Register" : "Login"}
            </button>
            <div
              className={`${styles.changeState} d-flex justify-content-between mt-2`}
            >
              <div>
                {!isSignUp ? (
                  <div>
                    Don't have an account?{" "}
                    <u onClick={() => setIsSignUp(!isSignUp)}>Sign up</u>
                  </div>
                ) : (
                  <div>
                    Already have an account?{" "}
                    <u onClick={() => setIsSignUp(!isSignUp)}>Login</u>
                  </div>
                )}
              </div>
              {!isSignUp && <div className={``}>Forgot password?</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
}
