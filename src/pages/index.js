import Head from "next/head";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "../styles/MainHomePage.module.css";
import "rsuite/dist/rsuite.min.css";
import "../styles/Home.module.css";
import "../styles/Navbar.module.css";
import "../styles/NewsContents.module.css";
import Navbar from "../partials/Navbar";
import InstallPrompt from "@/partials/InstallPrompt";
import RefreshOnScrollUp from "@/partials/RefreshOnScrollUp";
import Guideline from "@/partials/Guideline";

export default function Home() {
  return (
    <>
      <Head>
        <title>News4Elderly | HomePage</title>
      </Head>
      <div className={styles.HomepageContainer}>
        <div className={styles.themeDiv}>
          <Navbar />
        </div>
        <InstallPrompt />
        <h1 className={styles.HomepageHeader}>HomePage</h1>
        <Guideline />
        <div className={styles.routedPagesContainer}>
          <Link className={styles.routedPages} href="./info/">
            <span>go to</span>
            <ArrowForwardIcon />
            <p>Top News</p>
          </Link>
          <Link className={styles.routedPages} href="./science/">
            <span>go to</span>
            <ArrowForwardIcon />
            <p>Science News</p>
          </Link>
          <Link className={styles.routedPages} href="./business/">
            <span>go to</span>
            <ArrowForwardIcon />
            <p>Business News</p>
          </Link>
          <Link className={styles.routedPages} href="./world/">
            <span>go to</span>
            <ArrowForwardIcon />
            <p>World News</p>
          </Link>
          <Link className={styles.routedPages} href="./sports/">
            <span>go to</span>
            <ArrowForwardIcon />
            <p>Sport News</p>
          </Link>
          <Link className={styles.routedPages} href="./technology/">
            <span>go to</span>
            <ArrowForwardIcon />
            <p>Technology News</p>
          </Link>
        </div>
      </div>
      <RefreshOnScrollUp />
    </>
  );
}
