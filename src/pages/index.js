import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>News4Elderly | HomePage</title>
    </Head>
       <div>
      <h1>HomePage</h1>
      <Link href="./info/TopNews">
        <p>TopNews</p>
      </Link>
    </div>
    </>
   
  );
}
