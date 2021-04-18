import { Action, State } from './types'
import { getUpdatedCount } from './utils'

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'UPDATE_COUNT':
      return {
        ...state,
        count: getUpdatedCount(state.count, action.payload),
      }

    default:
      return state
  }
}
