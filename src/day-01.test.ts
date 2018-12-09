import { frequency, frequencyReachedTwice, input } from './day-01'

test.each`
  input                 | expected
  ${['+1', '+1', '+1']} | ${3}
  ${['+1', '+1', '-2']} | ${0}
  ${['-1', '-2', '-3']} | ${-6}
`('frequency($input) === $expected', ({ input, expected }) => {
  expect(frequency(input.join('\n'))).toBe(expected)
})

test('part one solution', () => {
  expect(frequency(input)).toBe(513)
})

test.each`
  input                             | expected
  ${['+1', '-1']}                   | ${0}
  ${['+3', '+3', '+4', '-2', '-4']} | ${10}
  ${['-6', '+3', '+8', '+5', '-6']} | ${5}
  ${['+7', '+7', '-2', '-7', '-4']} | ${14}
`('frequencyReachedTwice($input) === $expected', ({ input, expected }) => {
  expect(frequencyReachedTwice(input.join('\n'))).toBe(expected)
})

test('part two solution', () => {
  expect(frequencyReachedTwice(input)).toBe(287)
})
