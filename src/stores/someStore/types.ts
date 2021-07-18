type Store = {
  count: number
  actions: Actions
}

type Actions = {
  updateCount(value: number): void
}

export type { Store, Actions }
