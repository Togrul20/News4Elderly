import React from "react";
import styles from "../styles/Loader.module.css";

const Loading = () => {
  return (
    <div className={styles.spinner_wrapper}>
      <span className={styles.spinner}>Page is loading</span>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
