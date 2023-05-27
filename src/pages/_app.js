import "@/styles/globals.css";
import "../styles/GoogleTranslate.module.css";
import Layout from "./partials/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
