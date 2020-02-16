import { User } from 'models/user'
import { create } from 'zustand'

type State = {
  maybeUsers?: User[]
  initUsers: (users: User[]) => void
}

export const [useStore, api] = create<State>(set => ({
  initUsers(users) {
    set({ maybeUsers: users })
  }
}))
