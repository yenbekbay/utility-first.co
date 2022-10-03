import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html className="bg-background selection:bg-primary selection:text-white md:text-[1.5em]">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="preload"
          href="/fonts/Manrope[wght].woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Lucette-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Lucette-RegularItalic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Dinish-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
        <GoatCounter />
      </body>
    </Html>
  )
}

function GoatCounter() {
  return (
    <script
      data-goatcounter="https://utility-first.goatcounter.com/count"
      async
      src="//gc.zgo.at/count.js"
    />
  )
}
