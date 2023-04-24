import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const getStaticProps = async () => {
  const result = await fetch("https://inshorts.deta.dev/news?category");
  const options = await result.json();

  return {
    props:{opt: options}
  }
};



const TopNews = ({opt}) => {
  return (
    <div>
      <div className={styles.topnewsbackbtn}>
        <Link className={styles.topnewslink} href="/">
          Back to the homepage
        </Link>
      </div>
      <h1>TopNews</h1>
      {opt.data.map((el) => (
        <Link href={"/route/" + el.id} key={el.id} legacyBehavior>
          <a className="newscontents">
            <p className="newscontentssingle">{el.content}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default TopNews;
