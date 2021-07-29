type Props<Key extends string | number, T> =
  | {
      mapper: Record<Key, T>
      key: () => Key
      fallback?: T
    }
  | {
      mapper: Record<Key, T>
      key: () => Key | undefined
      fallback: T
    }

/**
 * Helper to build Object Literal lookups
 *
 * @example
 *
 * const result = makeMapper({
 *   key: () => {
 *     if (1 > 2) return 'a'
 *     else return 'b
 *   },
 *   mapper: {
 *     a: 'hello',
 *     b: 'world'
 *   },
 *   fallback: 'oops'
 * })
 *
 * // result === 'world'
 */
export function makeMapper<Key extends string | number, T>({
  key: getKey,
  mapper,
  fallback,
}: Props<Key, T>): T {
  const key = getKey()
  const value = key ? mapper[key] : fallback

  return (value || fallback) as T
}
