import create from 'zustand'

import type { Store } from './types'

export const useStore = create<Store>(set => ({
  count: 0,
  updateCount(value) {
    set(s => ({ count: s.count + value < 0 ? 0 : s.count + value }))
  },
}))
