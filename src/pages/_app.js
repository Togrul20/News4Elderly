import "@/styles/globals.css";
import "../styles/GoogleTranslate.module.css";
import Layout from "./Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
