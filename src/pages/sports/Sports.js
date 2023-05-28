import React, { useState, useRef } from "react";
import Link from "next/link";
import { Image } from "cloudinary-react";
import "rsuite/dist/rsuite.min.css";
import styles from "@/styles/Home.module.css";
import Footer from "../../partials/Footer";
import Navbar from "../../partials/Navbar";
import useTextToSpeech from "../../partials/useTextToSpeech";

// API
export const getStaticProps = async () => {
  const result = await fetch("https://inshorts.deta.dev/news?category=sports");
  const options = await result.json();

  return {
    props: { sports: options },
  };
};

const cloudinaryName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const Sports = ({ sports }) => {
  ///// Zoom in and out
  var [fontSize, setFontSize] = useState(30);
  const zoomIn = (e) => {
    e.preventDefault();
    setFontSize(fontSize + 2);
  };
  const zoomOut = (e) => {
    e.preventDefault();
    setFontSize(fontSize - 2);
  };

  const title = sports.data.map((el) => {
    return el.title;
  });

  // TTS
  const [language, setLanguage] = useState("en");
  const {
    speechSynthesisSupported,
    speakText,
    pauseText,
    resumeText,
    cancelText,
  } = useTextToSpeech();
  const speakButtonHandle = () => {
    speakText(title, language);
  };
  const pauseButtonHandle = () => {
    pauseText(title, language);
  };
  const resumeButtonHandle = () => {
    resumeText(title, language);
  };
  const cancelButtonHandle = () => {
    cancelText(title, language);
  };
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className={styles.sciencestyle}>
      <div>
        <Navbar />
      </div>
      <h1 className={styles.pageHeader}>Science News</h1>

      <div className={styles.speakBtnContainer}>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
        <button onClick={speakButtonHandle}>Speak</button>
        <button onClick={resumeButtonHandle}>Resume</button>
        <button onClick={pauseButtonHandle}>Pause</button>
        <button onClick={cancelButtonHandle}>Reset</button>
      </div>

      {sports.data.map((el) => (
        <div key={el.id} className={styles.generalContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.imageitslef}
              src={el.imageUrl}
              cloudName={cloudinaryName}
              width={150}
              height={150}
              alt="Image of the news"
              object-fit="fit"
            />
          </div>
          <div className={styles.dateTimeContainer}>
            <span>Published:</span>
            <span>{el.date}</span>
          </div>
          <Link href={"/sports/" + el.title} key={el.id} legacyBehavior>
            <p
              className={styles.newscontentssingle}
              style={{ fontSize: fontSize }}
    
            >
              {el.title}

              <span className={styles.contentTooltip}>
                Click to see the news
              </span>
            </p>
          </Link>
        </div>
      ))}
      <Footer zoomIn={zoomIn} zoomOut={zoomOut} />
    </div>
  );
};

export default Sports;
