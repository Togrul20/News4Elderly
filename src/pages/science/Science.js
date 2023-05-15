import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "rsuite/dist/rsuite.min.css";
import styles from "@/styles/Home.module.css";
import { Tooltip, Whisper } from "rsuite";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar"

export const getStaticProps = async () => {
  const result = await fetch("https://inshorts.deta.dev/news?category=science");
  const options = await result.json();

  return {
    props: { science: options },
  };
};

const Science = ({ science }) => {
  var [fontSize, setFontSize] = useState(30);
  const zoomIn = (e) => {
    e.preventDefault();
    setFontSize(fontSize + 2);
  };
  const zoomOut = (e) => {
    e.preventDefault();
    setFontSize(fontSize - 2);
  };

  return (
    <div className={styles.sciencestyle}>
      <div className={styles.c}>
        <Navbar/>
      </div>
        <h1 className={styles.pageHeader}>Science News</h1>

      {science.data.map((el) => (
        <div key={el.id} className={styles.generalContainer}>
          <Link href={"/science/" + el.title} key={el.id} legacyBehavior>
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
          <div className={styles.imageContainer}>
            <Whisper
              followCursor
              placement="top"
              trigger="hover"
              speaker={<Tooltip visible>Zoom in the photo</Tooltip>}
            >
              <Image
                className={styles.imageitslef}
                src={el.imageUrl}
                width={150}
                height={150}
                alt="Image of the article"
                object-fit="fit"
              />
            </Whisper>
          </div>
        </div>
      ))}
      <Footer zoomIn={zoomIn} zoomOut={zoomOut} />
    </div>
  );
};

export default Science;
