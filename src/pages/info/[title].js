import { useState, useEffect, useRef } from "react";
import { Router, useRouter } from "next/router";
import "rsuite/dist/rsuite.min.css";
import { Tooltip, Whisper } from "rsuite";
import { Image } from "cloudinary-react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../../styles/NewsContents.module.css";
import FooterContent from "../../partials/FooterContent";
import GoogleTranslate from "../GoogleTranslate";
import { convertToSlug } from "@/utils/convertToSlug";
import TextToSpeechButton from "@/partials/TextToSpeechButton";

const cloudinaryName = process.env.CLOUDINARY_CLOUD_NAME;

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_KEY}`
  );
  const result = await res.json();
  console.log(result);

  const paths = result.articles.map((el) => {
    return {
      params: { title: convertToSlug(el.title) },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const title = context.params.title;
  const result = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_KEY}`
  );
  const data = await result.json();
  const pageData = data.articles.find(
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
              src={context.urlToImage}
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
        <span>{context.publishedAt}</span>
      </div>
      <p
        className={styles.articleContent}
        style={{ fontSize: fontSize }}
        ref={targetElement}
      >
        {context.content}
        <a href={context?.url} className={styles.readMore}>
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
