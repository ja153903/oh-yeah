import fs from 'fs'
import path from 'path'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return <Post />
}

export function generateStaticParams() {
  const slugs = getSlugsFromFilenames()
  return slugs
}

function getSlugsFromFilenames() {
  const mdxPath = path.join(process.cwd(), 'src/content');
  const files = fs.readdirSync(mdxPath);

  return files.map((file) => {
    const [filename, _extension] = file.split('.')
    return { slug: filename }
  })
}
