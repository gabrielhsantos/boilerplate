const mockUser = () => {
  return {
    name: 'Maria',
    document: '70146281195',
    birthdate: new Date('1993-01-03'),
    phone: '11911111111',
    email: 'maria@email.com',
  }
}

const mockAddress = () => {
  return {}
}

export { mockUser, mockAddress }
