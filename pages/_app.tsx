import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])
  return <>
    {ready && <Script type="text/javascript"
      src="/static/postalytics.js"
      strategy="beforeInteractive"
      id="test-script"
    >
    </Script>}
    <Component {...pageProps} />
  </>
}
export default MyApp
