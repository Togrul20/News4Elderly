if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let i = {};
    const r = (e) => a(e, t),
      o = { module: { uri: t }, exports: i, require: r };
    s[t] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (c(...e), i));
  };
}
define(["./workbox-7c2a5a06"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/service-worker.js",
          revision: "e5eb988b7498dad18826fabfda039366",
        },
        {
          url: "/_next/static/chunks/297-f8ec4f41a77166de.js",
          revision: "f8ec4f41a77166de",
        },
        {
          url: "/_next/static/chunks/364-16958e34f5655cbc.js",
          revision: "16958e34f5655cbc",
        },
        {
          url: "/_next/static/chunks/415-fa32660e2d17cd49.js",
          revision: "fa32660e2d17cd49",
        },
        {
          url: "/_next/static/chunks/646-336a0aa77ae0c1b6.js",
          revision: "336a0aa77ae0c1b6",
        },
        {
          url: "/_next/static/chunks/664-83c338b9ddcb9792.js",
          revision: "83c338b9ddcb9792",
        },
        {
          url: "/_next/static/chunks/671-6f892982392afb46.js",
          revision: "6f892982392afb46",
        },
        {
          url: "/_next/static/chunks/c9c6fe98-90273b62ee887896.js",
          revision: "90273b62ee887896",
        },
        {
          url: "/_next/static/chunks/framework-73b8966a3c579ab0.js",
          revision: "73b8966a3c579ab0",
        },
        {
          url: "/_next/static/chunks/main-f8b1e229f6ee2031.js",
          revision: "f8b1e229f6ee2031",
        },
        {
          url: "/_next/static/chunks/pages/404-690d92fcaae471cb.js",
          revision: "690d92fcaae471cb",
        },
        {
          url: "/_next/static/chunks/pages/GoogleTranslate-24528de2d52ec3fa.js",
          revision: "24528de2d52ec3fa",
        },
        {
          url: "/_next/static/chunks/pages/Layout-ebee47cb8cf01850.js",
          revision: "ebee47cb8cf01850",
        },
        {
          url: "/_next/static/chunks/pages/Loading-1c9d5eeae9824634.js",
          revision: "1c9d5eeae9824634",
        },
        {
          url: "/_next/static/chunks/pages/_app-51e9c151efaed801.js",
          revision: "51e9c151efaed801",
        },
        {
          url: "/_next/static/chunks/pages/_error-3f6d1c55bb8051ab.js",
          revision: "3f6d1c55bb8051ab",
        },
        {
          url: "/_next/static/chunks/pages/business-b8c6fa1df5a42b9c.js",
          revision: "b8c6fa1df5a42b9c",
        },
        {
          url: "/_next/static/chunks/pages/business/%5Bbusinesstitle%5D-e33426aea268889d.js",
          revision: "e33426aea268889d",
        },
        {
          url: "/_next/static/chunks/pages/index-d37233a3ff716894.js",
          revision: "d37233a3ff716894",
        },
        {
          url: "/_next/static/chunks/pages/info-916f0ea1290627f0.js",
          revision: "916f0ea1290627f0",
        },
        {
          url: "/_next/static/chunks/pages/info/%5Btitle%5D-9d9fac8959a36716.js",
          revision: "9d9fac8959a36716",
        },
        {
          url: "/_next/static/chunks/pages/science-126981987d306f47.js",
          revision: "126981987d306f47",
        },
        {
          url: "/_next/static/chunks/pages/science/%5Bsciencetitle%5D-2ab918bae64b5828.js",
          revision: "2ab918bae64b5828",
        },
        {
          url: "/_next/static/chunks/pages/sports-6078a9ae3e904d8a.js",
          revision: "6078a9ae3e904d8a",
        },
        {
          url: "/_next/static/chunks/pages/sports/%5Bsportstitle%5D-7fb60e8a2418627c.js",
          revision: "7fb60e8a2418627c",
        },
        {
          url: "/_next/static/chunks/pages/technology-a89dda684d18509f.js",
          revision: "a89dda684d18509f",
        },
        {
          url: "/_next/static/chunks/pages/technology/%5Btechnologytitle%5D-116c21991eeed4e3.js",
          revision: "116c21991eeed4e3",
        },
        {
          url: "/_next/static/chunks/pages/world-0c34e46b7ec4d47b.js",
          revision: "0c34e46b7ec4d47b",
        },
        {
          url: "/_next/static/chunks/pages/world/%5Bworldtitle%5D-93296c53ebbe8b98.js",
          revision: "93296c53ebbe8b98",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-ede65d1f23cffced.js",
          revision: "ede65d1f23cffced",
        },
        {
          url: "/_next/static/css/08d2458098b2a507.css",
          revision: "08d2458098b2a507",
        },
        {
          url: "/_next/static/css/3e41b500f1d183c0.css",
          revision: "3e41b500f1d183c0",
        },
        {
          url: "/_next/static/css/7386295d2d611798.css",
          revision: "7386295d2d611798",
        },
        {
          url: "/_next/static/css/8d6581459fbe74a1.css",
          revision: "8d6581459fbe74a1",
        },
        {
          url: "/_next/static/css/94bf5083ba3edd93.css",
          revision: "94bf5083ba3edd93",
        },
        {
          url: "/_next/static/css/ae489021d6ba2091.css",
          revision: "ae489021d6ba2091",
        },
        {
          url: "/_next/static/y_gmTgb0aa_Vr6oIlAq0j/_buildManifest.js",
          revision: "15c8dfb90131cc6f500ad6d9df51d266",
        },
        {
          url: "/_next/static/y_gmTgb0aa_Vr6oIlAq0j/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/workbox-24d5432a.js",
          revision: "cca54b4daa18aad7e7be2e3ba7175298",
        },
        { url: "/favicon.ico", revision: "c30c7d42707a47a3f4591831641e50dc" },
        {
          url: "/icon-192x192.png",
          revision: "e31a949367d3a2e9a91a6958eda261bb",
        },
        {
          url: "/icon-256x256.png",
          revision: "6631b06641f09312c51128df267dafca",
        },
        {
          url: "/icon-384x384.png",
          revision: "92c58a97c8c5635a439598f1c432698b",
        },
        {
          url: "/icon-512x512.png",
          revision: "88260e0750e05196a045949091dee26c",
        },
        { url: "/manifest.json", revision: "ffd8de154c9b152de5807bcb757777db" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/sw.js", revision: "daadef578280e1702ed88c3c6bc5ddfe" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
