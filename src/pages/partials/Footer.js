import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Footer.module.css"

const Footer = ({ zoomIn, zoomOut }) => {
  return (
    <div className={styles.footerContainer}>
      <button
        onClick={(e) => {
          zoomOut(e);
        }}
        className={styles.zoomout}
      >
        Zoom out
      </button>
      <Link href="/">
        <p className={styles.footerBtn}>Home Page</p>
      </Link>
      <button
        onClick={(e) => {
          zoomIn(e);
        }}
        className={styles.zoomin}
      >
        Zoom in
      </button>
    </div>
  );
};

export default Footer;
