import { box } from 'styles/box'
import { text } from 'styles/text'

function Row({ label, value }: { label: string; value: string }) {
  return (
    <p className={box({ mb: '$4' })}>
      <span className={text({ fontWeight: 'bold' })}>{label}:&nbsp;</span>
      {value}
    </p>
  )
}

export { Row }
