import React, { useState } from "react";
import GoogleTranslate from "../GoogleTranslate";
import styles from "../../styles/Navbar.module.css";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      <div className={styles.topnewsbackbtn}>
            <ThemeToggle />
        <p>Choose</p>
        <GoogleTranslate />
      </div>
    </>
  );
};

export default Navbar;
