import MainLayout from '@/layouts/MainLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CurrencyContext } from '../../context/CurrencyContext'


export default function App({ Component, pageProps }: AppProps) {
  return (
      <CurrencyContext>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CurrencyContext>
  )
}
