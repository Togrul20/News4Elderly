import React from "react";
import GoogleTranslate from "../GoogleTranslate";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.topnewsbackbtn}>
      <Link className={styles.topnewslink} href="/">
        Back to the HomePage
      </Link>
      <p>Choose</p>
      <GoogleTranslate/>
    </div>
  );
};

export default Navbar;
