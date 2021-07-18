import create from 'zustand'

import { actions } from './actions'
import type { Store } from './types'

export const useStore = create<Store>((set, get) => ({
  count: 0,
  actions: actions(set, get),
}))
