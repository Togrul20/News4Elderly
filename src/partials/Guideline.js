import React, { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import styles from "../styles/Guideline.module.css";

const Guideline = () => {
  const [helper, setHelper] = useState(false);
  const helperBtn = () => {
    if (!helper) {
      setHelper(true);
    } else {
      setHelper(false);
    }
  };
  return (
    <div className={styles.guidelineContainer}>
      <div onClick={helperBtn} className={styles.helpContainer}>
        <p>Guideline</p>
        <HelpOutlineIcon />
      </div>
      {helper ? (
        <div className={styles.guidelineContent}>
          <p>1.Text can resize with zoom in/out button.</p>
          <p>
            2.Color contrast or background color can be changed with Mode button
            at the top-left.
          </p>
          <p>3.App can be installed with Install the App button.</p>
          <p>4.Language can be changed with Language button at the top-right.</p>
          <p>
            5.Text-to-speech can be used in each news category with
            Text-to-speech button. However, it does not cover all languages.
          </p>
          <p>
            <i>
              If these functionalities do not work properly, please refresh the
              page!
            </i>
            <i>By default, all functionalities are in English.</i>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Guideline;
