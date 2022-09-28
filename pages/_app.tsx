import '__generated__/tailwind.css'
import Layout from 'components/Layout'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import {ErrorBoundary} from 'react-error-boundary'
import type {FallbackProps} from 'react-error-boundary'

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Utility First</title>
        <meta
          content="Utility First is a digital product studio in Almaty, Kazakhstan."
          name="description"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Utility First" />
        <meta name="og:title" content="Utility First" />
        <meta name="apple-mobile-web-app-title" content="Utility First" />
      </Head>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  )
}

function ErrorFallback({error}: FallbackProps) {
  return (
    <Layout>
      <article className="prose">
        <h1>Something went wrong!</h1>

        <pre className="items-start whitespace-pre-line rounded-lg border border-red-600 bg-background font-mono text-red-600">
          {error.message}
        </pre>
      </article>
    </Layout>
  )
}
