import React, { useCallback, useEffect, useState } from "react";
import styles from "./HelpTab.module.scss";
import Spinner from "../Spinner/Spinner";
import Article from "../Article/Article";
import convert from "xml-js";
import axios from "axios";

const HelpTab = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const convertToObject = (xml) => {
    const object = JSON.parse(convert.xml2json(xml, { compact: true }));
    return object;
  };

  const getArticles = useCallback(async () => {
    try {
      const response = await axios.get("https://sweb.ru/export/turbojournal/", {
        "Content-Type": "application/xml; charset=utf-8",
      });

      const result = convertToObject(response.data);
      setArticles(result.rss.channel.item);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  });

  useEffect(() => {
    setIsLoading(true);
    getArticles();
  }, []);

  return (
    <div className={styles.helpTab}>
      <div className={styles.helpJournalNormal}>БОРТОВОЙ ЖУРНАЛ</div>
      <div className={styles.helpJournalBold}>БОРТОВОЙ ЖУРНАЛ</div>
      <div className={styles.articlesList}>
        {isLoading ? (
          <Spinner />
        ) : (
          articles.map((article, index) => (
            <Article
              key={index}
              title={article.title._text}
              text={article["turbo:content"]._cdata}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HelpTab;
