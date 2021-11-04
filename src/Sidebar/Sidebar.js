import React from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}></div>

      <div className={styles.sidebarMenuList}>
        <div className={styles.menuOption}>
          <div className={styles.iconUser} />
          <div>АККАУНТ</div>
        </div>
        <div className={styles.menuOption}>
          <div className={styles.iconVPS} />
          <div>VPS</div>
        </div>
        <div className={styles.menuOption}>
          <div className={styles.iconDomains} />
          <div>ДОМЕНЫ</div>
        </div>
        <div className={`${styles.menuOption} ${styles.chosenOption}`}>
          <div className={styles.iconHelp} />
          <div>БОРТОВОЙ ЖУРНАЛ</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
