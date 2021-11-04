import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>100.00 ₽</div>
      <div>
        <div className={styles.bell}>
          <div className={styles.oval} />
          <div className={styles.one} />
        </div>
        <span>vikavishny</span>
      </div>
      <div>Выйти</div>
    </div>
  );
};

export default Header;
