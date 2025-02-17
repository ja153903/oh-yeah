'use client'

import Link from 'next/link'

import { cx } from '@/lib/clsx'

export function NavBar() {
  return (
    <div
      className={cx(
        'sticky top-0 z-10',
        'flex flex-col pt-6 pb-5 px-4 gap-4 justify-center items-center w-full',
        'backdrop-filter backdrop-blur-lg'
      )}
    >
      <Link
        className="text-cyan font-geist-sans font-bold mr-3 underline text-3xl"
        href="/"
      >
        Oh yeah
      </Link>
      <p className="text-md text-base00 dark:text-base0">
        a blog by <span className="text-green italic">Jaime Abbariao</span>
      </p>
    </div>
  )
}
