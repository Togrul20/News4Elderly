import React, { useState, useEffect } from "react";
import "rsuite/dist/rsuite.min.css";
import { Tooltip, Whisper } from "rsuite";
import styles from "../styles/Home.module.css";

const TextToSpeechButton = ({ targetElement }) => {
  //Speaking or not
  const [isSpeaking, setIsSpeaking] = useState(false);
  //Language selection
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");

  // Voice selectino
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  useEffect(() => {
    // Fetch the available voices
    const fetchVoices = () => {
      const speechSynthesis = window.speechSynthesis;
      const availableVoices = speechSynthesis.getVoices();

      setVoices(availableVoices);
    };

    // Wait for the 'voiceschanged' event before fetching the voices
    window.speechSynthesis.onvoiceschanged = fetchVoices;
  }, []);
  const handleVoiceSelection = (event) => {
    const voiceName = event.target.value;
    const voice = voices.find((voice) => voice.name === voiceName);

    setSelectedVoice(voice);
  };

  //Rate
  const [rate, setRate] = useState(1);
  const handlePitchChange = (event) => {
    const newRate = parseFloat(event.target.value);
    setRate(newRate);
  };

  const handleSpeak = () => {
    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = targetElement.current.innerText;
    utterance.lang = selectedLanguage;
    utterance.voice = selectedVoice;
    utterance.rate = rate;

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    speechSynthesis.speak(utterance);
  };

  const cancelSpeak = () => {
    setIsSpeaking(false);
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = targetElement.current.innerText;
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
          <select
            onChange={handleVoiceSelection}
            className={styles.ttxforContent}
          >
            <option>Select language</option>
            {voices.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
          <button onClick={handleSpeak}>
            {isSpeaking ? "Speaking..." : "Speak"}
          </button>
          <button onClick={cancelSpeak}>Cancel</button>
          <div className={styles.ttxforContentPitch}>
            <label>Voice speed change</label>
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

export default TextToSpeechButton;
