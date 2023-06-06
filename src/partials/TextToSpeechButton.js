import React, { useState } from "react";

const TextToSpeechButton = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");

  const handleSpeak = () => {
    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = document.documentElement.innerText;
    utterance.lang = selectedLanguage;

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    speechSynthesis.speak(utterance);
  };

  const cancelSpeak = () => {
    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = document.documentElement.innerText;
    utterance.lang = selectedLanguage;

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    speechSynthesis.cancel(utterance);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const supportedLanguages = [
    { label: "English (US)", value: "en-US" },
    { label: "English (UK)", value: "en-GB" },
    { label: "French", value: "fr-FR" },
    { label: "Russian", value: "ru-RU" },
    // Add more supported languages as needed
  ];

  return (
    <>
      <button onClick={handleSpeak}>
        {isSpeaking ? "Speaking..." : "Speak"}
      </button>
      <br />
      <button onClick={cancelSpeak}>cancel</button>
      <br />
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        {supportedLanguages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default TextToSpeechButton;
