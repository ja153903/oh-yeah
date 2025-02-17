import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { CopyToClipboard } from '@/components/copy-to-clipboard'

export function MDXCodeBlock({
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
      <SyntaxHighlighter language={match[1]} style={vs2015} {...properties} />
    </div>
  ) : (
    <code className={className} {...properties} />
  )
}
