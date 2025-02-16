import { cx } from '@/lib/clsx'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cx(
        'prose',
        'prose-pre:bg-base3 dark:prose-pre:bg-base03 prose-pre:shadow-sm prose-pre:m-0',
        'prose-headings:text-base0 prose-headings:underline',
        'prose-p:text-base1 dark:prose-p:text-base01',
        'prose-inline-code:text-green',
        'prose-math-formula:text-center prose-math-formula:mt-0',
        'prose-strong:text-magenta',
        'w-full max-w-none md:w-auto md:max-w-[65ch]'
      )}
    >
      {children}
    </div>
  )
}
