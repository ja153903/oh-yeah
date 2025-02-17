import Link from 'next/link'

export default async function Page() {
  return (
    <div className="p-4 flex flex-col gap-5 w-full max-w-none md:w-auto md:max-w-[100ch]">
      <h1 className="text-lg font-bold underline">About me</h1>
      <div className="flex flex-col gap-3">
        <p>
          Hi! I&apos;m a software engineer at{' '}
          <Link
            href="https://figma.com"
            className="text-magenta"
            target="_blank"
          >
            Figma
          </Link>{' '}
          working on <span className="text-green">User Growth</span>.
        </p>
        <p className="font-bold">Some handy links in case:</p>
        <ul className="list-disc list-inside">
          <li>
            <Link
              href="https://github.com/ja153903"
              target="_blank"
              className="text-orange"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/jaime-louis-abbariao-972a1399/"
              target="_blank"
              className="text-orange"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
