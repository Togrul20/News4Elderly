import Link from "next/link";
import styles from "../styles/404.module.css";

const NotFound = () => {
  return (
    <div className={styles.errorContainer}>
      <h1>Oooops...</h1>
      <h2>That page cannot be found</h2>
      <div className={styles.errorLinkContainer}>
        <p>Go back to the</p>
        <Link className={styles.errorLink} href="/">
          HomePage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
