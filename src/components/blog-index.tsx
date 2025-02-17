'use client'

import Link from 'next/link'

export type Metadata = {
  slug: string
  title: string
  description: string
  publishedAt: Date
}

type BlogIndexProps = {
  metadata: Metadata[]
}

export function BlogIndex(props: BlogIndexProps) {
  return (
    <div className="flex flex-col gap-3">
      {props.metadata.map((metadata) => {
        return (
          <div key={metadata.slug}>
            <BlogItemPreview {...metadata} />
          </div>
        )
      })}
    </div>
  )
}

type BlogItemPreviewProps = Metadata

function BlogItemPreview(props: BlogItemPreviewProps) {
  return (
    <div className="flex flex-col gap-1">
      <Link
        href={`/blog/${props.slug}`}
        className="text-lg font-bold underline text-cyan"
      >
        {props.title}
      </Link>
      <p className="text-md italic">{props.description}</p>
      <p className="text-sm text-green text-right">
        published on {props.publishedAt.toLocaleDateString()}
      </p>
    </div>
  )
}
