import React, { useState } from "react";
import parse from "html-react-parser";
import styles from "./Article.module.scss";

const Article = ({ title, text }) => {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <div className={!showText ? styles.separatorLine : null} />
      <div
        className={`${styles.article} ${
          showText ? styles.openedArticle : null
        }`}
      >
        <div
          className={styles.articleTitle}
          onClick={() => setShowText(!showText)}
        >
          <div>{title}</div>
          <div className={showText ? styles.arrowUp : styles.arrowDown} />
        </div>

        {showText ? (
          <div className={styles.articleText}>{parse(text)}</div>
        ) : null}
      </div>
    </>
  );
};

export default Article;
