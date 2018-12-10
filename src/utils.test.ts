import { count, cycle } from './utils'

test('count()', () => {
  expect(count('ababca')).toEqual({ a: 3, b: 2, c: 1 })
})

test('cycle()', () => {
  let iterator = cycle([2, 4, 6])

  // cycles through input array fully once
  expect(iterator.next().value).toEqual(2)
  expect(iterator.next().value).toEqual(4)
  expect(iterator.next().value).toEqual(6)

  // cycles through input array again once the end is reached
  expect(iterator.next().value).toEqual(2)
  expect(iterator.next().value).toEqual(4)
  expect(iterator.next().value).toEqual(6)
})
