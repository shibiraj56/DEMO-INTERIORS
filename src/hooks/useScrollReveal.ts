import { useEffect } from 'react'
import type { RefObject } from 'react'
import { initScrollReveals } from '../lib/animations'

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  routeKey?: string
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const cleanup = initScrollReveals(el)
    return cleanup
  }, [ref, routeKey])
}
