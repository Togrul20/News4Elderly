import axios from "axios";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://inshorts.deta.dev/news?category=science");
  const result = await res.json();

  const paths = result.data.map((el) => {
    return {
      params: { sciencetitle: el.title },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const title = context.params.sciencetitle;
  const result = await fetch("https://inshorts.deta.dev/news?category=science");
  const data = await result.json();
  const pageData = data.data.filter((news) => news.title === title);

  return {
    props: { context: pageData[0] },
  };
};

const Details = ({ context }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className={styles.articleContainer}>
      <h1 className={styles.articleTitle}>{context.title}</h1>
      <p className={styles.articleContent}>{context.content}</p>
      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default Details;
