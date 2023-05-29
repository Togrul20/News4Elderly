import axios from "axios";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import "rsuite/dist/rsuite.min.css";
import { Tooltip, Whisper } from "rsuite";
import { Image } from "cloudinary-react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../../styles/NewsContents.module.css";
import FooterContent from "../../partials/FooterContent";
import { convertToSlug } from "@/utils/convertToSlug";

const cloudinaryName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export const getStaticPaths = async () => {
  const res = await fetch("https://inshorts.deta.dev/news?category=sports");
  const result = await res.json();

  const paths = result.data.map((el) => {
    return {
      params: { sportstitle: convertToSlug(el.title) },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const title = context.params.sportstitle;
  const result = await fetch("https://inshorts.deta.dev/news?category=sports");
  const data = await result.json();
  const pageData = data.data.find(
    (news) => convertToSlug(news.title) === title
  );

  return {
    props: { context: pageData },
  };
};

const Details = ({ context }) => {
  var [fontSize, setFontSize] = useState(25);
  const zoomInArticle = (e) => {
    e.preventDefault();
    setFontSize(fontSize + 2);
  };
  const zoomOutArticle = (e) => {
    e.preventDefault();
    setFontSize(fontSize - 2);
  };

  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className={styles.articleContainer}>
      <div className={styles.backToBtnContainer}>
        <ArrowBackIcon sx={{ color: "white", fontSize: "30px" }} />
        <button className={styles.backToBtn} onClick={goBack}>
          Go back
        </button>
      </div>
      <h1 className={styles.articleTitle}>{context.title}</h1>
      <div className={styles.generalContentContainer}>
        <div className={styles.contentImageContainer}>
          <Whisper
            followCursor
            placement="top"
            trigger="hover"
            speaker={<Tooltip visible>Zoom in the photo</Tooltip>}
          >
            <Image
              className={styles.contentImage}
              src={context.imageUrl}
              cloudName={cloudinaryName}
              width={150}
              height={150}
              alt="Image of the news"
              object-fit="fit"
            />
          </Whisper>
        </div>
      </div>
      <div className={styles.publishedTime}>
        <p>Published: </p>
        <span>{context.time}</span>
      </div>
      <p className={styles.articleContent} style={{ fontSize: fontSize }}>
        {context.content}
        <a href={context?.readMoreUrl} className={styles.readMore}>
          Go to the link of the news
        </a>
      </p>
      <FooterContent
        zoomInArticle={zoomInArticle}
        zoomOutArticle={zoomOutArticle}
      />
    </div>
  );
};

export default Details;