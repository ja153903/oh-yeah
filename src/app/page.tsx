import { BlogIndex } from '@/components/blog-index'
import { cx } from '@/lib/clsx'
import { getMetadataFromFilenames } from '@/utils/mdx'

export default async function Home() {
  const metadata = (await getMetadataFromFilenames()).toSorted((a, b) => {
    return b.publishedAt.getTime() - a.publishedAt.getTime()
  })

  return (
    <Section className="p-4">
      <BlogIndex metadata={metadata} />
    </Section>
  )
}

function Section({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cx('flex flex-col gap-3', className)}>{children}</div>
}
