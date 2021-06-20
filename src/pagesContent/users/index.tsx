import { Button } from 'components/atoms/Button'
import { DynamicLink } from 'components/atoms/Link'
import { Text } from 'components/atoms/Text'
import { useStore } from 'stores/someStore'
import type { User } from 'types/user'

type Props = {
  users: User[]
}

function RenderUsers({ users }: Props) {
  const count = useStore(s => s.count)
  const updateCount = useStore(s => s.updateCount)

  const links = users.map(({ id, name }) => (
    <DynamicLink
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
      <Button color="grey" css={{ marginBottom: '$4' }} onClick={() => updateCount(1)}>
        increment count
      </Button>
      <Text css={{ my: '$4' }}>count value: {count}</Text>
      <Text as="h2" fontSize="3xl" css={{ marginBottom: '$4' }}>
        Users:
      </Text>
      {links}
    </>
  )
}

export { RenderUsers }
