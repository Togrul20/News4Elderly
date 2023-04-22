import Link from "next/link";
import styles from "@/styles/Home.module.css";

const TopNews = () => {
  return (
    <div>
      <div className={styles.topnewsbackbtn}>
        <Link className={styles.topnewslink} href="/">Back to the homepage</Link>
      </div>
      <h1>TopNews</h1>
    </div>
  );
};

export default TopNews;
