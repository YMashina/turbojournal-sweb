import React, { useEffect, useState } from "react";
import axios from "axios";
import convert from "xml-js";
import Article from "../Article/Article";
import styles from "./App.module.scss";
import Spinner from "../Spinner/Spinner";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HelpTab from "../HelpTab/HelpTab";

const App = () => {
  return (
    <>
      <div className={styles.gridLayout}>
        <Sidebar />
        <div className={styles.content}>
          <Header />
          <HelpTab />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
