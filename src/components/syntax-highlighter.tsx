'use client'

import ReactSyntaxHighlighter from 'react-syntax-highlighter'

type Props = {
  language?: string
  code: string
}

export function SyntaxHighlighter(props: Props) {
  return (
    <ReactSyntaxHighlighter language={props.language}>
      {props.code}
    </ReactSyntaxHighlighter>
  )
}
