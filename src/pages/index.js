import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>News4Elderly | HomePage</title>
    </Head>
       <div>
      <h1>HomePage</h1>
      <Link href="./route/TopNews">
        <p>TopNews</p>
      </Link>
    </div>
    </>
   
  );
}
