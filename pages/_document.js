import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@latest/animate.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.bootcdn.net/ajax/libs/wow/1.1.2/wow.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      new WOW({
        offset: 50,
        boxClass: 'wow',
        animateClass: 'animate__animated',
      }).init()
    `,
          }}
        ></script>
      </body>
    </Html>
  );
}
