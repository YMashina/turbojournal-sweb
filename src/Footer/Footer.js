import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.bottomLeft}>
          <div>
            © 2001– 2018 ООО <span>«СпейсВэб»</span>
          </div>
          <div>Все права защищены.</div>
          <div>
            Лицензия <span>№163230</span>
          </div>
        </div>

        <div className={styles.bottomRight}>
          <div>
            <span>+7 (812) 334-12-22</span> (в Санкт-Петербурге)
          </div>
          <div>
            <span>+7 (495) 663-16-12</span> (в Москве)
          </div>
          <div>
            <span>(800) 100-16-15</span> (бесплатно по России)
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
