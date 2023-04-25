import axios from "axios";
import { useState, useEffect } from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://inshorts.deta.dev/news?category");
  const result = await res.json();

  const paths = result.data.map((el) => {
    return {
      params: { title: el.title },
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
    "https://inshorts.deta.dev/news?category"
  );
  const data = await result.json();
  const pageData = data.data.filter((news) => news.title === title);

  return {
    props: { context: pageData[0] },
  };
};

const Details = ({ context }) => {
  return (
    <div>
      <h1>{context.title}</h1>
      <p>{context.content}</p>
    </div>
  );
};

export default Details;
