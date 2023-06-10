import React, { useState, useEffect, useRef } from "react";
import "rsuite/dist/rsuite.min.css";
import { Tooltip, Whisper } from "rsuite";
import styles from "../styles/Home.module.css";

const TextToSpeechTitle = ({ refEl }) => {
  //Speaking or not
  const [isSpeaking, setIsSpeaking] = useState(false);
  //Resuming or not
  const [isResuming, setIsResuming] = useState(false);
  //Paused or not
  const [isPaused, setIsPaused] = useState(false);
  //Reseted or not
  const [isReseted, setIsReseted] = useState(false);
  const [speechSynthesisSupported, setSpeechSynthesisSupported] =
    useState(false);

  //Language selection
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const supportedLanguages = [
    { label: "Chinese(Simplified)", value: "zh-CN" },
    { label: "Chinese(Traditional)", value: "zh-TW" },
    { label: "English (US)", value: "en-US" },
    { label: "English (UK)", value: "en-GB" },
    { label: "French", value: "fr-FR" },
    { label: "German", value: "de-DE" },
    { label: "Hindi", value: "hi-IN" },
    { label: "Italian", value: "it-IT" },
    { label: "Japanese", value: "ja-JP" },
    { label: "Korean", value: "ko-KR" },
    { label: "Polish", value: "pl-PL" },
    { label: "Portuguese", value: "pt-PT" },
    { label: "Russian", value: "ru-RU" },
    { label: "Spanish", value: "es-ES" },
  ];

  useEffect(() => {
    setSpeechSynthesisSupported("speechSynthesis" in window);
  }, []);

  const [rate, setRate] = useState(1);
  const handlePitchChange = (event) => {
    const newRate = parseFloat(event.target.value);
    setRate(newRate);
  };

  const handleSpeak = () => {
    setIsSpeaking(true);
    setIsResuming(false);
    setIsPaused(false);
    setIsReseted(false);

    const element = refEl.current;
    const titles = Array.from(element.querySelectorAll("p")).map(
      (p) => p.textContent
    );
    titles.forEach((title) => {
      const utterance = new SpeechSynthesisUtterance(title);
      utterance.rate = rate;
      utterance.lang = selectedLanguage;
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      window.speechSynthesis.speak(utterance);
    });
  };

  const resumeSpeak = () => {
    setIsSpeaking(false);
    setIsResuming(true);
    setIsPaused(false);
    setIsReseted(false);
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = refEl.current.innerText;
    utterance.lang = selectedLanguage;
    utterance.onend = () => {
      setIsSpeaking(false);
    };
    speechSynthesis.resume(utterance);
  };

  const pauseSpeak = () => {
    setIsSpeaking(false);
    setIsResuming(false);
    setIsPaused(true);
    setIsReseted(false);
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = refEl.current.innerText;
    utterance.lang = selectedLanguage;
    utterance.onend = () => {
      setIsSpeaking(false);
    };
    speechSynthesis.pause(utterance);
  };

  const cancelSpeak = () => {
    setIsSpeaking(false);
    setIsResuming(false);
    setIsPaused(false);
    setIsReseted(true);
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = refEl.current.innerText;
    utterance.lang = selectedLanguage;
    utterance.onend = () => {
      setIsSpeaking(false);
    };
    speechSynthesis.cancel(utterance);
  };

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
        <div className={styles.speakBtnContainer}>
          <Whisper
          followCursor
          placement="top"
          trigger="hover"
          speaker={
            <Tooltip visible>Select a speech language</Tooltip>
          }>
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className={styles.ttxforContent}
            >
              <option>Speech language</option>
              {supportedLanguages.map((language) => (
                <option key={language.value} value={language.value}>
                  {language.label}
                </option>
              ))}
            </select>
          </Whisper>

          <button onClick={handleSpeak}>
            {isSpeaking ? "Speaking..." : "Speak"}
          </button>
          <button onClick={resumeSpeak}>
            {isResuming ? "Resuming..." : "Resume"}
          </button>
          <button onClick={pauseSpeak}>{isPaused ? "Paused" : "Pause"}</button>
          <button onClick={cancelSpeak}>
            {isReseted ? "Reseted" : "Reset"}
          </button>
          <div className={styles.ttxforContentPitch}>
            <label>Voice speed</label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={rate}
              onChange={handlePitchChange}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TextToSpeechTitle
