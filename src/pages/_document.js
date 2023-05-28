import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
        <meta name="theme-color" content="#fff" />
        <meta name="description" content="An accessible PWA app"/>
        <style>
          {`
              body > .skiptranslate {
                display: none;
              }

              .goog-te-banner-frame.skiptranslate {
                display: none !important;
              }
              body {
                top: 0px !important;
              }
              @media print {
                #google_translate_element {
                  display: none;
                }
              }
            `}
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
