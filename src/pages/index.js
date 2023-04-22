import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="/TopNews">
        <p>TopNews</p>
      </Link>
    </div>
  );
}
