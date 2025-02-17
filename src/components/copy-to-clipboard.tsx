'use client'

import { useState } from 'react'

import { toast, type ToastOptions } from 'react-toastify'

import { cx } from '@/lib/clsx'

const TOAST_CONFIG = {
  position: 'top-right',
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: 'colored',
} satisfies ToastOptions

type Props = { content: string }

export function CopyToClipboard(props: Props) {
  const [hover, setHover] = useState(false)

  return (
    <button
      className="absolute right-0 w-6 h-6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        navigator.clipboard
          .writeText(props.content)
          .then(() => {
            toast.success('Copied code to clipboard', TOAST_CONFIG)
          })
          .catch(() => {
            toast.error('Failed to copy to clipboard', TOAST_CONFIG)
          })
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className={cx(
          'size-6 cursor-pointer',
          'stroke-green',
          'active:fill-green',
          !hover && 'hidden'
        )}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
        />
      </svg>
    </button>
  )
}
