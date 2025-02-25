import fs from 'fs'
import path from 'path'

const getContentPath = (cwd: string) => path.join(cwd, 'src/content')

export function getSlugsFromFilenames() {
  const mdxPath = getContentPath(process.cwd())
  const files = fs.readdirSync(mdxPath)

  return files
    .map((file) => {
      const [filename, extension] = file.split('.')
      if (extension.endsWith('mdx')) {
        return { slug: filename }
      }

      return null
    })
    .filter((slug) => slug !== null)
}

type Metadata = {
  slug: string
  publishedAt: Date
  title: string
  description: string
}

export async function getMetadataFromFilenames(): Promise<Metadata[]> {
  const slugs = getSlugsFromFilenames()

  return Promise.all(
    slugs.map(async ({ slug }) => {
      const { metadata } = await import(`@/content/${slug}.mdx`)
      return { ...metadata, slug, publishedAt: new Date(metadata.publishedAt) }
    })
  )
}
