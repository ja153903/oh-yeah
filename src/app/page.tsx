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
    <Section className="gap-10">
      <Section>
        <SectionHeader content="Things I wrote" />
        <BlogIndex metadata={metadata} />
      </Section>
    </Section>
  )
}

function SectionHeader(props: React.PropsWithChildren<{ content: string }>) {
  return <p className="font-bold text-2xl text-base1">{props.content}</p>
}

function Section({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cx('flex flex-col gap-3', className)}>{children}</div>
}
