import type { GetState, SetState } from 'zustand'

import type { Actions, Store } from './types'

const actions = (set: SetState<Store>, _get: GetState<Store>): Actions => ({
  updateCount(value) {
    set(s => ({ count: s.count + value < 0 ? 0 : s.count + value }))
  },
})

export { actions }
