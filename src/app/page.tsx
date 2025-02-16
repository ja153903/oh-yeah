import { BlogIndex } from '@/components/blog-index'
import { getMetadataFromFilenames } from '@/utils/mdx'

export default async function Home() {
  const metadata = (await getMetadataFromFilenames()).toSorted((a, b) => {
    const aDate = new Date(a.publishedAt)
    const bDate = new Date(b.publishedAt)

    return bDate.getTime() - aDate.getTime()
  })

  return (
    <div>
      <BlogIndex metadata={metadata} />
    </div>
  )
}
