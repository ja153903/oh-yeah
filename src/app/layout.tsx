import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { cx } from '@/lib/clsx'
import { NavBar } from '@/components/nav-bar'

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
    icon: './favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
