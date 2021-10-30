jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    pathname: '',
  }),

  // shallow merge the "default" exports with...
  default: {
    ...jest.requireActual('next/router').default,
  },
}))

module.exports = jest.requireMock('next/router')
