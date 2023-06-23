import React, { useEffect } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import "../styles/GoogleTranslate.module.css";
import Layout from "./Layout";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service worker registered: ", registration);
          })
          .catch((registrationError) => {
            console.log(
              "Service worker registration failed: ",
              registrationError
            );
          });
      });
    }
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
