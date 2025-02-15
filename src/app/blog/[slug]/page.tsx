import fs from 'fs'
import path from 'path'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CopyToClipboard } from '@/components/copy-to-clipboard'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  return <Post components={{ code }} />
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
    <div className="relative">
      <CopyToClipboard content={properties.children as string} />
      <SyntaxHighlighter
        language={match[1]}
        PreTag="div"
        style={solarizedDark}
        {...properties}
      />
    </div>
  ) : (
    <code className={className} {...properties} />
  )
}

export function generateStaticParams() {
  const slugs = getSlugsFromFilenames()
  return slugs
}

function getSlugsFromFilenames() {
  const mdxPath = path.join(process.cwd(), 'src/content')
  const files = fs.readdirSync(mdxPath)

  return files.map((file) => {
    const [filename, _extension] = file.split('.')
    return { slug: filename }
  })
}
