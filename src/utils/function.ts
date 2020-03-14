/**
 * A function that does nothing but return the parameter supplied to it.
 * Good as a default or placeholder function.
 */
export function identity<T>(x: T) {
  return x
}

/**
 * An async function that does nothing but return the parameter supplied to it.
 * Good as a default or placeholder function.
 */
export async function asyncIdentity<T>(x: T) {
  return x
}

/**
 * A function that returns `undefined`
 */
export function noop() {
  return undefined
}
