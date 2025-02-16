import path from 'path'
import fs from 'fs'

export function getSlugsFromFilenames() {
  const mdxPath = path.join(process.cwd(), 'src/content')
  const files = fs.readdirSync(mdxPath)

  return files
    .map((file) => {
      const [filename, extension] = file.split('.')
      if (extension.startsWith('md')) {
        return { slug: filename }
      }

      return null
    })
    .filter((slug) => slug !== null)
}

export async function getMetadataFromFilenames() {
  const slugs = getSlugsFromFilenames()

  return Promise.all(
    slugs.map(async ({ slug }) => {
      const { metadata } = await import(`@/content/${slug}.mdx`)
      return { ...metadata, slug }
    })
  )
}
