import { useEffect, useState } from "react";

const useTextToSpeech = () => {
  const [speechSynthesisSupported, setSpeechSynthesisSupported] =
    useState(false);

  useEffect(() => {
    setSpeechSynthesisSupported("speechSynthesis" in window);
  }, []);

  const speakText = (title, language) => {
    if (speechSynthesisSupported) {
      title.forEach((t) => {
        const utterance = new SpeechSynthesisUtterance(t);
        utterance.lang = language;
        window.speechSynthesis.speak(utterance);
      });
    }
  };

  const pauseText = (title, language) => {
    if (speechSynthesisSupported) {
      title.forEach((t) => {
        const utterance = new SpeechSynthesisUtterance(t);
        utterance.lang = language;
        window.speechSynthesis.pause(utterance);
      });
    }
  };

  const resumeText = (title, language) => {
    if (speechSynthesisSupported) {
      title.forEach((t) => {
        const utterance = new SpeechSynthesisUtterance(t);
        utterance.lang = language;
        window.speechSynthesis.resume(utterance);
      });
    }
  };

  const cancelText = (title, language) => {
    if (speechSynthesisSupported) {
      title.forEach((t) => {
        const utterance = new SpeechSynthesisUtterance(t);
        utterance.lang = language;
        window.speechSynthesis.cancel(utterance);
      });
    }
  };

  return {
    speechSynthesisSupported,
    speakText,
    pauseText,
    resumeText,
    cancelText,
  };
};

export default useTextToSpeech;
