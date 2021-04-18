import React from 'react'

type State = {
  count: number
}

type Action = { type: 'UPDATE_COUNT'; payload: number }

type Dispatch = React.Dispatch<Action>

export type { State, Action, Dispatch }
