import React from "react";
import styles from "../../utils/styles/BestSellers.module.css";
import rice from "../../assets/rice.png";
import banana from "../../assets/banana.png";
import tomato from "../../assets/tomato.png";

function BestSellers() {
  const benefits = [
    {
      name: "Local Ofada Rice",
      image: rice,
    },
    {
      name: "Fresh Whole Plantain",
      image: banana,
    },
    { name: "Home Grown Tomato", image: tomato },
  ];
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div>
          <p>Our bestsellers</p>
        </div>
      </div>
      <div className={styles.body_inner}>
        {benefits.map((data, index) => {
          return (
            <div className={styles.card}>
              <div className={styles.card_image_wrapper}>
                <div className={styles.card_image_wrapper_inner}>
                  <img src={data.image} alt={data.name} />
                </div>
              </div>
              <div className={styles.name}>
                <p>{data.name}</p>
              </div>
              <div className={styles.button}>
                <p>Shop now</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestSellers;
