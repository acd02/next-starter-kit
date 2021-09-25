import { box } from 'styles/box'

export default function Custom404() {
  return (
    <div
      className={box({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      })}
    >
      missing page
    </div>
  )
}
