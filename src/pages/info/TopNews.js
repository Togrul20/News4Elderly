import Link from "next/link";
import styles from "@/styles/Home.module.css";

export const getStaticProps = async () => {
  const result = await fetch("https://inshorts.deta.dev/news?category");
  const options = await result.json();

  return {
    props: { info: options },
  };
};

const TopNews = ({ info }) => {
  return (
    <div>
      <div className={styles.topnewsbackbtn}>
        <Link className={styles.topnewslink} href="/">
          Back to the homepage
        </Link>
      </div>
      <h1>TopNews</h1>
      {info.data.map((el) => (
        <Link href={"/info/" + el.title} key={el.id} legacyBehavior>
          <a className="newscontents">
            <p className="newscontentssingle">{el.title}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default TopNews;
