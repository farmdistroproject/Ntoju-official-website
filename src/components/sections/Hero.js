import React from "react";
import image from "../../assets/hero.png";
import Navbar from "../navbar/Navbar";
import styles from "../../utils/styles/Hero.module.css";

function Hero() {
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.body_inner}>
        <div className={styles.body_inner_text}>
          <p>
            Get Fresh, Healthy and Handpicked Farm Produce from the Comfort of
            your Home.
          </p>

          <div className={styles.button}>
            <svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5303 7.03033C14.8232 6.73744 14.8232 6.26256 14.5303 5.96967L9.75736 1.1967C9.46447 0.903806 8.98959 0.903806 8.6967 1.1967C8.40381 1.48959 8.40381 1.96447 8.6967 2.25736L12.9393 6.5L8.6967 10.7426C8.40381 11.0355 8.40381 11.5104 8.6967 11.8033C8.98959 12.0962 9.46447 12.0962 9.75736 11.8033L14.5303 7.03033ZM0 7.25H14V5.75H0V7.25Z"
                fill="#1E1E1E"
                fill-opacity="0.8"
              />
            </svg>

            <p>Get started</p>
          </div>
        </div>
        <div className={styles.body_inner_image}>
          <div className={styles.body_inner_image_wrapper}>
            <div className={styles.body_inner_image_wrapper_inner}>
              <img src={image} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
