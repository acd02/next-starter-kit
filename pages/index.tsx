import * as React from 'react'
import Link from 'next/link'
import { style } from 'typestyle'

import { compose } from '@typed/compose'

type Item = {
  label: string
  id: number
}

const items: Item[] = [
  { label: 'one', id: 1 },
  { label: 'two', id: 2 },
  { label: 'three', id: 3 },
  { label: 'four', id: 4 }
]

function labelToUpperCase(item: Item, key?: number): React.ReactElement<{}> {
  return <p key={key}>{item.label.toUpperCase()}</p>
}

function labelsToUpperCase(_items: Item[]): React.ReactElement<{}>[] {
  return _items.map(labelToUpperCase)
}

function filterEvenItem(item: Item): boolean {
  return item.id % 2 === 0
}

function filterEvenItems(_items: Item[]): Item[] {
  return _items.filter(filterEvenItem)
}

const evenLabelsToUpperCase = compose<Item[], Item[], React.ReactElement<{}>[]>(
  labelsToUpperCase,
  filterEvenItems
)

const textStyles = style({
  fontSize: '40px'
})

export const Home = () => (
  <div>
    <Link href="/other">
      <a className={style({ display: 'block', marginBottom: '1rem' })}>other ➡️</a>
    </Link>
    <p className={textStyles}>content</p>
    {evenLabelsToUpperCase(items)}
  </div>
)

export default Home
