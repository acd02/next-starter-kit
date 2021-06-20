import { Text } from 'components/atoms/Text'

function Row({ label, value }: { label: string; value: string }) {
  return (
    <Text css={{ marginBottom: '$4' }}>
      <Text as="span" fontWeight="bold">
        {label}:&nbsp;
      </Text>
      {value}
    </Text>
  )
}

export { Row }
