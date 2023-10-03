import { Figtree } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import { initMercadoPago } from '@mercadopago/sdk-react'
import GlobalStyles from '@styles/global'
import defaultTheme from '@styles/theme'
import { ReservationProvider } from 'src/contexts/reservationsContext'
import { StationProvider } from 'src/contexts/stationsContext'
import 'react-toastify/dist/ReactToastify.css'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const DynamicInitMercadoPago = dynamic(
  () => import('../services/mercadoPago'),
  {
    ssr: false,
  },
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SessionProvider session={pageProps.session}>
        <ReservationProvider>
          <StationProvider>
            <DynamicInitMercadoPago />
            <main className={figtree.className}>
              <Component {...pageProps} />
            </main>
            <GlobalStyles />
          </StationProvider>
        </ReservationProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}
