import { Figtree } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@styles/global'
import defaultTheme from '@styles/theme'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SessionProvider session={pageProps.session}>
        <main className={figtree.className}>
          <Component {...pageProps} />
        </main>
        <GlobalStyles />
      </SessionProvider>
    </ThemeProvider>
  )
}
