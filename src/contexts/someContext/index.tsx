import { createContext, PropsWithChildren, useContext, useReducer } from 'react'

import { reducer } from './reducer'
import { Dispatch, State } from './types'

const defaultState: State = {
  count: 0,
}

const SomeContext = createContext<State>((undefined as unknown) as State)
const DispatchContext = createContext<Dispatch>((undefined as unknown) as Dispatch)

function SomeProvider({
  value,
  children,
}: PropsWithChildren<{
  value?: Partial<State>
}>) {
  const [state, dispatch] = useReducer(reducer, {
    ...defaultState,
    ...value,
  })

  return (
    <SomeContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </SomeContext.Provider>
  )
}

function useSomeContext(): State {
  const state = useContext(SomeContext)

  /* eslint-disable-next-line */
  if (!state) throw new Error('useSomeContext must be used within a SomeProvider')

  return state
}

function useSomeDispatch(): Dispatch {
  const dispatch = useContext(DispatchContext)

  /* eslint-disable-next-line */
  if (!dispatch) throw new Error('useSomeDispatch must be used within a SomeProvider')

  return dispatch
}

export { useSomeContext, useSomeDispatch, SomeProvider }
