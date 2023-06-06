import React, { useState } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import styles from "..//styles/Footer.module.css";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

const Footer = ({ zoomIn, zoomOut }) => {
  return (
    <div className={styles.footerContainer}>
      <button
        onClick={(e) => {
          zoomOut(e);
        }}
        className={styles.zoomout}
      >
        <ZoomOutIcon sx={{ fontSize: "2rem" }} />
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
        <ZoomInIcon sx={{ fontSize: "2rem"}}/>
        Zoom in
      </button>
    </div>
  );
};

export default Footer;
