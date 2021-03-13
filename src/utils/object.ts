/**
 * Preserves the type of the array returned by Object.keys
 *
 * @example
 *
 * const item = {
 *   label: 'ten',
 *   id: 10,
 *   isCool: true
 * }
 *
 * const keys = objectKeys(item)
 * // const keys: ("label" | "id" | "isCool")[]
 *
 */
function objectKeys<T>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}

/**
 * Preserves the type of the array returned by Object.entries
 *
 * @example
 *
 * const item = {
 *   label: 'ten',
 *   id: 10,
 *   isCool: true
 * }
 *
 * const entries = objectEntries(item)
 * // const entries: ["label" | "id" | "isCool", string | number | boolean][]
 *
 */
function objectEntries<T>(obj: T) {
  return Object.entries(obj) as [keyof T, T[keyof T]][]
}

export { objectKeys, objectEntries }
