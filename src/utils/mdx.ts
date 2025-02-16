import path from 'path'
import fs from 'fs'

export function getSlugsFromFilenames() {
  const mdxPath = path.join(process.cwd(), 'src/content')
  const files = fs.readdirSync(mdxPath)

  return files.map((file) => {
    const [filename] = file.split('.')
    return { slug: filename }
  })
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
