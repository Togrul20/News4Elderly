import axios from "axios";
import { useState, useEffect } from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://inshorts.deta.dev/news?category");
  const result = await res.json();

  const paths = result.data.map(el => {
    return {
      params: { id: el.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const result = await fetch("https://inshorts.deta.dev/news?category" + id);
  const data = await result.json();

  return {
    props: { content: data },
  };
};

const Details = ({ content }) => {
  return (
    <div>
      <h1>{content.id}</h1>
      <p>{content.content}</p>
    </div>
  );
};

export default Details;
