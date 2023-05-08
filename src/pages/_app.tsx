import MainLayout from '@/layouts/MainLayout'
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import { CurrencyContext } from '../../context/CurrencyContext'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
} : AppProps) {
  return (
      <SessionProvider session={session}>
        <CurrencyContext>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </CurrencyContext>
      </SessionProvider>
  )
}
