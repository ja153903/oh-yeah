import clsx from 'clsx'
import { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * `cx` is meant to be a wrapper around twMerge and clsx working together
 * so that we can deterministically decide what styles to apply
 */
export function cx(...classNames: ClassValue[]) {
  return twMerge(clsx(...classNames))
}
