import { cx } from '@/lib/clsx'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cx(
        'prose',
        'prose-pre:m-0 prose-pre:bg-[#1E1E1E]',
        'prose-headings:text-base1 prose-headings:underline',
        'prose-p:text-base1 dark:prose-p:text-base01',
        'prose-li:text-base1',
        'prose-inline-code:text-green',
        'prose-math-formula:text-center prose-math-formula:mt-0 prose-math-formula:text-base0',
        'prose-strong:text-magenta',
        'w-full max-w-none md:w-auto md:max-w-[100ch]'
      )}
    >
      {children}
    </div>
  )
}
