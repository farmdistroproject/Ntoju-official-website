import React from "react";
import image1 from "../../assets/veg.png";
import image2 from "../../assets/bag.png";
import styles from "../../utils/styles/Offers.module.css";

function Offers() {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div>
          <p>What we offer</p>
        </div>
      </div>
      <div className={styles.body_inner}>
        <div className={styles.body_inner_image}>
          <div className={styles.body_inner_image_wrapper}>
            <img src={image2} alt="food bag" />
          </div>
        </div>
        <div className={styles.body_inner_text}>
          <div className={styles.body_inner_text_inner}>
            <div className={styles.body_inner_text_header}>
              <p>Get fresh and healthy farm produce with ease.</p>
            </div>

            <p>
              At Ntoju, we take pride in growing our crops with care and using
              sustainable practices to ensure the highest quality of produce.
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
              <p>Shop now</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.body_inner}>
        <div className={styles.body_inner_image}>
          <div className={styles.body_inner_image_wrapper}>
            <img src={image1} alt="food bag" />
          </div>
        </div>
        <div className={styles.body_inner_text}>
          <div className={styles.body_inner_text_inner}>
            <div className={styles.body_inner_text_header}>
              <p>Get maximum return on your farm produce now.</p>
            </div>

            <p>
              At Ntoju, we understand that getting the most out of your crops is
              crucial to your success. That's why we offer a variety of services
              and resources to help you achieve your goals.
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
              <p>Be a supplier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
