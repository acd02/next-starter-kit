import type { Theme } from './types'

// see: https://codewithstyle.info/Deep-property-access-in-TypeScript/
function themeGet<
  P1 extends keyof NonNullable<Theme>,
  P2 extends keyof NonNullable<NonNullable<Theme>[P1]>
>(prop1: P1, prop2: P2): NonNullable<NonNullable<Theme>[P1]>[P2] | undefined
function themeGet(...props: [string, string]): unknown {
  return ({ theme }: { theme: Theme }) =>
    props.reduce(
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      (result, prop) => (result === null ? undefined : (result as any)[prop]),
      theme
    )
}

export { themeGet }
