type Props<T> = {
  values: [predicate: () => boolean, getValue: () => T][]
  fallback: () => T
}

/**
 * Helper to build some sort of mapper,
 * it will return the value from the first tuple's predicate that returns a truthy value
 *
 * @example
 *
 * const result = makeMapper({
 *   values: [
 *     [() => 1 > 2, () => 'hello'],
 *     [() => 1 < 2, () => 'world'],
 *   ],
 *   fallback: () => 'oops'
 * })
 *
 * // result === 'world'
 */
export function makeMapper<T>({ values, fallback }: Props<T>): T {
  /* eslint-disable-next-line fp/no-let */
  let result: T | undefined

  /* eslint-disable-next-line fp/no-loops */
  for (const [predicate, getValue] of values)
    if (predicate()) {
      /* eslint-disable-next-line fp/no-mutation */
      result = getValue()
      break
    }

  return result || fallback()
}
