import React, { useState, useRef } from "react";
import Link from "next/link";
import { Image } from "cloudinary-react";
import "rsuite/dist/rsuite.min.css";
import styles from "@/styles/Home.module.css";
import Footer from "../../partials/Footer";
import Navbar from "../../partials/Navbar";
import TTXButtons from "@/partials/TTXButtons";
import { convertToSlug } from "@/utils/convertToSlug";

// API
export const getStaticProps = async () => {
  const result = await fetch("https://inshorts.deta.dev/news?category=world");
  const options = await result.json();

  return {
    props: { world: options },
  };
};

const cloudinaryName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const World = ({ world }) => {
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

  const title = world.data.map((el) => {
    return el.title;
  });

  return (
    <div className={styles.sciencestyle}>
      <div>
        <Navbar />
      </div>
      <h1 className={styles.pageHeader}>World News</h1>

      <TTXButtons title={title}/>

      {world.data.map((el) => (
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
          <Link href={"/world/" + convertToSlug(el?.title)} key={el.id}>
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

export default World;
