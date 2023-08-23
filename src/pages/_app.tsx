import { Figtree } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@styles/global'
import defaultTheme from '@styles/theme'
import { ReservationProvider } from 'src/contexts/reservationsContext'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('@mercadopago/sdk-react').then((mp) => {
      mp.initMercadoPago('APP_USR-a5c4cee8-680c-4eff-aa3f-eba4566fba6c')
    })
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <SessionProvider session={pageProps.session}>
        <ReservationProvider>
          <main className={figtree.className}>
            <Component {...pageProps} />
          </main>
          <GlobalStyles />
        </ReservationProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}
