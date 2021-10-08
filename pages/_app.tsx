import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script>
      var a
      var rc = new RegExp('_bn_d=([^;]+)')
      var rq = new RegExp('_bn_d=([^&#]*)', 'i')
      var aq = rq.exec(window.location.href)
      if (aq != null) a = aq
      else var ac = rc.exec(document.cookie)
      if (ac != null) a = ac
      if (a != null) {
      // @ts-ignore
      var _bn_d = a[1]
      ;(function () {
      // @ts-ignore
      var pl = document.createElement('script')
      pl.type = 'text/javascript'
      pl.async = true
      pl.src =
      ('https:' == document.location.protocol ? 'https://app' : 'http://app') +
      '.postaladmin.com/plDataEmbed.js'
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(pl, s)
  })()
}
    </Script>
    <Component {...pageProps} />
  </>
}
export default MyApp
