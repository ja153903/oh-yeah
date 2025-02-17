import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

import { NavBar } from '@/components/nav-bar'
import { cx } from '@/lib/clsx'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Oh yeah',
  description: 'A blog by Jaime Abbariao',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={cx(
          geistSans.className,
          geistMono.className,
          'antialiased',
          'bg-base03 dark:bg-base03',
          'text-base1 dark:text-base01',
          'flex flex-col justify-center items-center',
          'h-full pb-10 w-full',
          'overflow-y-scroll'
        )}
      >
        <NavBar />
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
