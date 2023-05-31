import React, { useEffect, useState, useRef } from "react";
import "rsuite/dist/rsuite.min.css";
import { Tooltip, Whisper } from "rsuite";
import useTextToSpeech from "./useTextToSpeech";
import styles from "../styles/Home.module.css";

const TTXButtons = ({ title }) => {
  // button feedback
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);

  // TTS
  const [language, setLanguage] = useState("en");
  const {
    speechSynthesisSupported,
    speakText,
    pauseText,
    resumeText,
    cancelText,
  } = useTextToSpeech();
  const speakButtonHandle = async () => {
    speakText(title, language);
    setIsClicked1(true);
    setIsClicked2(false);
    setIsClicked3(false);
    setIsClicked4(false);
  };
  const pauseButtonHandle = async () => {
    pauseText(title, language);
    setIsClicked3(true);
    setIsClicked1(false);
    setIsClicked2(false);
    setIsClicked4(false);
  };
  const resumeButtonHandle = async () => {
    resumeText(title, language);
    setIsClicked2(true);
    setIsClicked1(false);
    setIsClicked3(false);
    setIsClicked4(false);
  };
  const cancelButtonHandle = async () => {
    cancelText(title, language);
    setIsClicked4(true);
    setIsClicked1(false);
    setIsClicked2(false);
    setIsClicked3(false);
  };
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Reset all feedback when clicked in window
  const buttonsRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonsRef.current && !buttonsRef.current.contains(event.target)) {
        setIsClicked1(false);
        setIsClicked2(false);
        setIsClicked3(false);
        setIsClicked4(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //TTS modal
  const [modal, setModal] = useState(false);

  const modalBtn = () => {
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  return (
    <>
      <div className={styles.ttxModal}>
        <Whisper
          followCursor
          placement="top"
          trigger="hover"
          speaker={
            <Tooltip visible>Click to use text-to-speech function</Tooltip>
          }
        >
          <button onClick={modalBtn}>Text-to-speech</button>
        </Whisper>
      </div>
      {modal && (
        <div className={styles.speakBtnContainer} ref={buttonsRef}>
          <select
            value={language}
            onChange={handleLanguageChange}
            className={styles.speakLanguage}
          >
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
          <button onClick={speakButtonHandle}>Speak</button>
          {isClicked1 && <span className={styles.feedback_text}>Speaking</span>}
          <button onClick={resumeButtonHandle}>Resume</button>
          {isClicked2 && <span className={styles.feedback_text}>Resumed</span>}
          <button onClick={pauseButtonHandle}>Pause</button>
          {isClicked3 && <span className={styles.feedback_text}>Paused</span>}
          <button onClick={cancelButtonHandle}>Reset</button>
          {isClicked4 && <span className={styles.feedback_text}>Reseted</span>}
        </div>
      )}
    </>
  );
};

export default TTXButtons;
