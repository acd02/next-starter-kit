import { Link } from 'components/atoms/Link'
import { useStore } from 'stores/someStore'
import { box } from 'styles/box'
import { button } from 'styles/button'
import { text } from 'styles/text'
import type { User } from 'types/user'

type Props = {
  users: User[]
}

function RenderUsers({ users }: Props) {
  const [count, updateCount] = useStore(s => [s.count, s.actions.updateCount])

  const links = users.map(({ id, name }) => (
    <Link
      key={id}
      css={{
        display: 'block',
        marginBottom: '$2',
        width: 'fit-content',
        textDecoration: 'underline',
      }}
      route="users"
      param={`${id}`}
      label={name}
    />
  ))

  return (
    <>
      <button
        className={button({ color: 'grey', css: { mb: '$4' } })}
        onClick={() => updateCount(1)}
      >
        increment count
      </button>
      <p className={box({ my: '$4' })}>count value: {count}</p>
      <h2
        className={text({
          fontSize: '3xl',
          css: {
            mb: '$4',
          },
        })}
      >
        Users:
      </h2>
      {links}
    </>
  )
}

export { RenderUsers }
