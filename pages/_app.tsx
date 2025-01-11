import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log("_app.tsx is rendering");

  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}

