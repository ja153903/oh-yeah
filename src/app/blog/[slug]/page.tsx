import { redirect } from 'next/navigation'

import { MDXCodeBlock } from '@/components/mdx-code'
import { getSlugsFromFilenames } from '@/utils/mdx'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post, metadata } = await import(`@/content/${slug}.mdx`)

  if (metadata.draft) {
    // NOTE: If the post is a draft then we should make sure to respect this
    redirect('/')
  }

  return (
    <div className="p-4">
      <Post components={{ code: MDXCodeBlock }} />
    </div>
  )
}

export function generateStaticParams() {
  const slugs = getSlugsFromFilenames()
  return slugs
}
