import { BlogIndex } from '@/components/blog-index'
import { cx } from '@/lib/clsx'
import { getMetadataFromFilenames } from '@/utils/mdx'

export default async function Home() {
  const metadata = (await getMetadataFromFilenames()).toSorted((a, b) => {
    const aDate = new Date(a.publishedAt)
    const bDate = new Date(b.publishedAt)

    return bDate.getTime() - aDate.getTime()
  })

  return (
    <Section>
      <BlogIndex metadata={metadata} />
    </Section>
  )
}

function Section({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cx('flex flex-col gap-3 p-4', className)}>{children}</div>
  )
}
