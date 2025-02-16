import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CopyToClipboard } from '@/components/copy-to-clipboard'
import { getSlugsFromFilenames } from '@/utils/mdx'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  return (
    <div className="p-4">
      <Post components={{ code }} />
    </div>
  )
}

function code({
  className,
  ...properties
}: React.PropsWithChildren<{
  className: string
  children: string | string[]
}>) {
  const match = /language-(\w+)/.exec(className || '')
  return match ? (
    <div className="ring-2 ring-base01 rounded-lg px-4 py-2">
      <div className="relative">
        <CopyToClipboard content={properties.children as string} />
        <SyntaxHighlighter
          showLineNumbers
          language={match[1]}
          style={solarizedDark}
          {...properties}
        />
      </div>
    </div>
  ) : (
    <code className={className} {...properties} />
  )
}

export function generateStaticParams() {
  const slugs = getSlugsFromFilenames()
  return slugs
}
