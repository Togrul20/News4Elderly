import { useState, useEffect, useRef } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import "rsuite/dist/rsuite.min.css";
import { Tooltip, Whisper } from "rsuite";
import { Image } from "cloudinary-react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../../styles/NewsContents.module.css";
import FooterContent from "../../partials/FooterContent";
import GoogleTranslate from "../GoogleTranslate";
import TextToSpeechButton from "@/partials/TextToSpeechButton";
import { convertToSlug } from "@/utils/convertToSlug";

const cloudinaryName = process.env.CLOUDINARY_CLOUD_NAME;

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.NEWSDATA_KEY}&country=az,us,tr,ru,in&category=business`
  );
  const result = await res.json();

  const paths = result.results.map((el) => {
    return {
      params: { businesstitle: convertToSlug(el.title) },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const title = context.params.businesstitle;
  const result = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.NEWSDATA_KEY}&country=az,us,tr,ru,in&category=business`
  );
  const data = await result.json();
  const pageData = data.results.find(
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

  const targetElement = useRef(null);

  return (
    <div className={styles.articleContainer}>
      <div className={styles.backToBtnContainer}>
        <ArrowBackIcon sx={{ color: "white", fontSize: "30px" }} />
        <button className={styles.backToBtn} onClick={goBack}>
          Go back
        </button>
        <div style={{ position: "absolute", right: 0 }}>
          <GoogleTranslate />
        </div>
      </div>
      <h1 className={styles.articleTitle}>{context.title}</h1>
      <TextToSpeechButton targetElement={targetElement}/>
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
              src={context.image_url}
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
        <span>{context.pubDate}</span>
      </div>
      <p
        className={styles.articleContent}
        style={{ fontSize: fontSize }}
        ref={targetElement}
      >
        {context.content}
        <a href={context?.link} className={styles.readMore}>
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
