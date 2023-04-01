import React from "react";
import styles from "../../utils/styles/Navbar.module.css";

function Navbar() {
  return (
    <div>
      <div className={styles.body}>
        <div className={styles.body_inner}>
          <div className={styles.body_inner_wrapper}>
            <div className={styles.body_logo}>
              <p>Ntoju</p>
            </div>
            <div className={styles.body_options}>
              <p>Welcome</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>

          <div className={styles.body_registration}>
            <p>Products</p>
            <p>Sign in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
