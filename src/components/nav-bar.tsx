'use client'

import Link from 'next/link'

export function NavBar() {
  return (
    <div className="sticky top-0 z-10 flex flex-col pt-10 pb-8 justify-center items-center w-full backdrop-filter backdrop-blur-lg px-4 gap-4">
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
