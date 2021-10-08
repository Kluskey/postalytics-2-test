import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script type="text/javascript"
      src="/static/postalytics.js"
      strategy="beforeInteractive"
      id="test-script"
    >
    </Script>
    <Component {...pageProps} />
  </>
}
export default MyApp
