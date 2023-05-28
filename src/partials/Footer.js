import React, { useState } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import styles from "..//styles/Footer.module.css";

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
        <span className={styles.homeLogo}>
          <HomeIcon sx={{ fontSize: "30px" }} />
        </span>
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
