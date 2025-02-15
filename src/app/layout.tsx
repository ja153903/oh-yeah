import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
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
  title: 'Oh Yeah',
  description: 'A blog by Jaime Abbariao',
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
          geistSans.variable,
          geistMono.variable,
          'antialiased',
          'bg-base03 dark:bg-base03',
          'text-base1 dark:text-base01',
          'flex flex-col justify-center items-center',
          'md:h-screen sm:h-full p-4'
        )}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
