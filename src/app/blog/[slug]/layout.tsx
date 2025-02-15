import { cx } from '@/lib/clsx'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cx(
        'prose',
        'prose-pre:border-2 prose-pre:rounded-lg prose-pre:border-base01 dark:prose-pre:border-base1',
        'prose-pre:bg-base3 dark:prose-pre:bg-base03 prose-pre:shadow-xl',
        'prose-headings:text-base1 dark:prose-headings:text-base01',
        'prose-p:text-base1 dark:prose-p:text-base01',
        'prose-code:text-orange'
      )}
    >
      {children}
    </div>
  )
}
