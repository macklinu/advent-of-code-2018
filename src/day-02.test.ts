import { checksum, input } from './day-02'

test('part one example', () => {
  expect(
    checksum(
      [
        'abcdef',
        'bababc',
        'abbcde',
        'abcccd',
        'aabcdd',
        'abcdee',
        'ababab',
      ].join('\n')
    )
  ).toEqual(12)
})

test('part one answer', () => {
  expect(checksum(input)).toEqual(6972)
})
