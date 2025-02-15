import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkMdx from 'remark-mdx'
import rehypeKatex from 'rehype-katex'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkMdx, remarkGfm],
    rehypePlugins: [rehypeKatex],
  },
})

export default withMDX(nextConfig)
